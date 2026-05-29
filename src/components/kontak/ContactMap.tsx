export default function ContactMap() {
  return (
    <div className="w-full h-screen mt-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32659998.91846564!2d95.87258707303965!3d-2.2227825815859465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sid!2sid!4v1769348682803!5m2!1sid!2sid"
        className="w-full h-full border-0"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        loading="lazy"
      />
    </div>
  );
}
