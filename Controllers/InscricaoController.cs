using Microsoft.AspNetCore.Mvc;
using MvcConecta.Models;
using System.Net.Http;
using System.Text;
using System.Text.Json;

namespace MvcConecta.Controllers
{
    public class InscricaoController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public InscricaoController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View(new Inscricao());
        }

        [HttpPost]
        public async Task<IActionResult> Index(Inscricao model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            try
            {
                var client = _httpClientFactory.CreateClient();
                var content = new StringContent(
                    JsonSerializer.Serialize(new
                    {
                        nome = model.Nome,
                        cpf = model.Cpf,
                        nascimento = model.Nascimento,
                        telefone = model.Telefone,
                        email = model.Email,
                        endereco = model.Endereco,
                        cidade = model.Cidade,
                        escola = model.Escola,
                        serie = model.Serie,
                        cooperado = model.Cooperado,
                        conheceu = model.Conheceu,
                        motivos = model.Motivos,
                        _subject = "Nova Inscrição - Barracred Conecta",
                        _template = "table"
                    }),
                    Encoding.UTF8,
                    "application/json"
                );

                var response = await client.PostAsync(
                    "https://formsubmit.co/ajax/social@barracred.com.br",
                    content
                );

                if (response.IsSuccessStatusCode)
                {
                    ViewBag.Mensagem = new { tipo = "sucesso", texto = "Inscrição enviada com sucesso! Em breve entraremos em contato." };
                    return View(new Inscricao());
                }
                else
                {
                    ViewBag.Mensagem = new { tipo = "erro", texto = "Erro ao enviar inscrição. Tente novamente ou entre em contato pelo WhatsApp." };
                }
            }
            catch (Exception)
            {
                ViewBag.Mensagem = new { tipo = "erro", texto = "Erro ao enviar inscrição. Tente novamente ou entre em contato pelo WhatsApp." };
            }

            return View(model);
        }
    }
}
