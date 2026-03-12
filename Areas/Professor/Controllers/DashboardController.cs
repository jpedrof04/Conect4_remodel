using Microsoft.AspNetCore.Mvc;

namespace MvcConecta.Areas.Professor.Controllers
{
    [Area("Professor")]
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
