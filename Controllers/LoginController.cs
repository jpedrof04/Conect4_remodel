using Microsoft.AspNetCore.Mvc;
using MvcConecta.Models;

namespace MvcConecta.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(LoginViewModel model)
        {
            if (string.IsNullOrEmpty(model.Email) || string.IsNullOrEmpty(model.Senha))
            {
                ModelState.AddModelError("", "Por favor, preencha todos os campos.");
                return View(model);
            }

            if (model.Tipo == "aluno")
            {
                return RedirectToAction("Index", "Dashboard", new { area = "Aluno" });
            }
            else
            {
                return RedirectToAction("Index", "Dashboard", new { area = "Professor" });
            }
        }
    }
}
