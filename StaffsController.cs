using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using School_Parent_App.Data;

namespace School_Parent_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffsController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;
        public StaffsController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }



        [HttpGet]
        public async Task<IActionResult> GetAllParents()
        {
            var parents = await dbContext.Parents.ToListAsync();
            return Ok(parents);

        }


        [HttpPut("approve/{ParentId}")]
        public async Task<IActionResult> ApproveParent(int ParentId)
        {
            var parent = await dbContext.Parents.FindAsync(ParentId);


            // Update parent application status to Approved 
            parent.Status = "Approved";
            dbContext.Entry(parent).State = EntityState.Modified;
            await dbContext.SaveChangesAsync();
            return NoContent();
        }


        [HttpPut("Reject/{ParentId}")]
        public async Task<IActionResult> RejectParent(int ParentId)
        {
            var parent = await dbContext.Parents.FindAsync(ParentId);


            // Update parent application status to Approved 
            parent.Status = "Rejected";
            dbContext.Entry(parent).State = EntityState.Modified;
            await dbContext.SaveChangesAsync();
            return NoContent();
        }










    }
}
