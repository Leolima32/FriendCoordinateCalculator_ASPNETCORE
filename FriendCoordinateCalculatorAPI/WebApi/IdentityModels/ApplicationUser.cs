using AspNetCore.Identity.Mongo;

namespace WebApi.IdentityModels
{
    public class ApplicationUser : MongoIdentityUser
    {
        public string Name { get; set; }
    }
}
