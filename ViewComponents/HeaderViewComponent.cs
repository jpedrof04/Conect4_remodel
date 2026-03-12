using Microsoft.AspNetCore.Mvc;

namespace MvcConecta.ViewComponents
{
    public class HeaderViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
