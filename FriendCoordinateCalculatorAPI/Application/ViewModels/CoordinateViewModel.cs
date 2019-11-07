namespace Application.ViewModels
{
    public class CoordinateViewModel
    {
        public CoordinateViewModel(double _longitude, double _latitude)
        {
            Longitude = _longitude;
            Latitude = _latitude;
        }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
    }
}