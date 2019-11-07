using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class Coordinate
    {
        public Coordinate(double longitude, double latitude)
        {
            Longitude = longitude;
            Latitude = latitude;
        }

        public double Longitude { get; set; }
        public double Latitude { get; set; }
    }
}
