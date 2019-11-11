using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
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

        [BsonIgnore]
        public double DistanceToCurrentPosition { get; set; }

        public double CalculateDistance(Coordinate currentPosition)
        {
            DistanceToCurrentPosition = Math.Sqrt(Math.Pow((Position.Longitude - currentPosition.Longitude),2) + Math.Pow((Position.Latitude - currentPosition.Latitude),2));
            return DistanceToCurrentPosition;
        }
    }
}
