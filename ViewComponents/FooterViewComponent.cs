using Microsoft.AspNetCore.Mvc;

namespace MvcConecta.ViewComponents
{
    public class FooterViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
