using Microsoft.AspNetCore.Mvc;

namespace MvcConecta.ViewComponents
{
    public class WhatsAppFloatViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
