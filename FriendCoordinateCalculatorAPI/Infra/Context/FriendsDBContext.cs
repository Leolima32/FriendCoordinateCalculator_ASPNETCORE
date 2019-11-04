using Domain.Entities;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infra.Context
{
    public class FriendsDBContext
    {
        private readonly IMongoDatabase _database = null;

        public FriendsDBContext(IOptions<Settings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            if (client != null)
                _database = client.GetDatabase(settings.Value.Database);
        }

        public IMongoCollection<Friend> Friends
        {
            get
            {
                return _database.GetCollection<Friend>("Friend");
            }
        }
    }
}
