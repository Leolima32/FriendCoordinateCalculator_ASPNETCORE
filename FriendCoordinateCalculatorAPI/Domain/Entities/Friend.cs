using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class Friend
    {
        public Friend(string name, Coordinate position)
        {
            Name = name;
            Position = position;
        }

        public ObjectId _id { get; set; }
        public string Name { get; private set; }
        public Coordinate Position { get; private set; }

        public decimal CalculateDistance(Coordinate currentPosition)
        {
            //TODO: Implement
            return Position.Longitude - currentPosition.Longitude;
        }

        public IEnumerable<Friend> VisitFriend()
        {
            //TODO: Implement
            return new List<Friend>();
        }
    }
}
