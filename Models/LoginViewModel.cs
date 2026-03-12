namespace MvcConecta.Models
{
    public class LoginViewModel
    {
        public string Email { get; set; } = string.Empty;
        public string Senha { get; set; } = string.Empty;
        public string Tipo { get; set; } = "aluno";
    }
}
