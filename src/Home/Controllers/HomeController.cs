using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Byte4Byte_Canvas.Models;

namespace Byte4Byte_Canvas.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Details()
    {
        return View();
    }
    
    public IActionResult Gallery()
    {
        return View();
    }

    public IActionResult Projects()
    {
        return View();
    }

    public IActionResult Models()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
