using Microsoft.AspNetCore.Mvc;

namespace MvcConecta.Areas.Aluno.Controllers
{
    [Area("Aluno")]
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Logout()
        {
            return RedirectToAction("Index", "Login");
        }
    }
}
