using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class CalculationHistoryLog
    {
        public CalculationHistoryLog(Friend friend, double distanceCalculated, DateTime time)
        {
            Friend = friend;
            DistanceCalculated = distanceCalculated;
            Time = time;
        }

        public DateTime Time { get; set; }
        public ObjectId _id { get; set; }
        public Friend Friend { get; private set; }
        public double DistanceCalculated { get; private set; }
    }
}
