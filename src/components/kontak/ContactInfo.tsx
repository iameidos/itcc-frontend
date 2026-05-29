import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <Phone className="w-6 h-6" />
        <div>
          <h3 className="font-semibold">Telepon</h3>
          <p className="">0815 8373 223</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Clock className="w-6 h-6" />
        <div>
          <h3 className="font-semibold">Jam Operasional</h3>
          <p className="">Senin s/d Jumat 8.00 am - 4.00 pm</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Mail className="w-6 h-6" />
        <div>
          <h3 className="font-semibold">Email</h3>
          <p className="">info@itccinternational.org</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <MapPin className="w-6 h-6" />
        <div>
          <h3 className="font-semibold">Alamat</h3>
          <p className="">Jalan Pakuan No. 02, Baranangsiang, Bogor, Jawa Barat 16143, Indonesia</p>
        </div>
      </div>
    </div>
  );
}
