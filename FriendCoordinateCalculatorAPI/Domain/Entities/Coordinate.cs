using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class Coordinate
    {
        public Coordinate(decimal longitude, decimal latitude)
        {
            Longitude = longitude;
            Latitude = latitude;
        }

        public decimal Longitude { get; set; }
        public decimal Latitude { get; set; }
    }
}
