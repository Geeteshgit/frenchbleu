import FadeUp from "../animations/FadeUp";

const LocationMap = () => {
  return (
    <FadeUp y={18} delay={0.22}>
      <div className="overflow-hidden rounded-xl">
        <iframe
          title="FrenchBleu location"
          src="https://www.google.com/maps?q=15%20Rose%20Avenue%2C%20New%20York%2C%20NY%2010001&output=embed"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="h-70 w-full"
        />
      </div>
    </FadeUp>
  );
};

export default LocationMap;
