namespace Application.ViewModels
{
    public class CoordinateViewModel
    {
        public CoordinateViewModel(decimal _longitude, decimal _latitude)
        {
            Longitude = _longitude;
            Latitude = _latitude;
        }
        public decimal Longitude { get; private set; }
        public decimal Latitude { get; private set; }
    }
}