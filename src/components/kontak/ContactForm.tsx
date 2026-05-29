'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRecaptcha } from '@/hooks/useRecaptcha';

const FormSchema = z.object({
  name: z.string().min(3, 'Nama minimal 3 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Pesan minimal 10 karakter'),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const { execute } = useRecaptcha();

  const onSubmit = async (values: FormValues) => {
    if (loading) return;
    setLoading(true);

    try {
      const token = await execute('submit');

      const res = await fetch('/api/kontak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, token }),
      });

      if (!res.ok) throw new Error();

      toast.success('Pesan berhasil dikirim!', {
        description: 'Kami akan menghubungi Anda secepatnya.',
      });

      form.reset();
    } catch {
      toast.error('Gagal mengirim pesan', {
        description: 'Silakan coba lagi nanti.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Input placeholder="Nama Lengkap" {...form.register('name')} />
        {form.formState.errors.name && <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>}
      </div>

      <div>
        <Input type="email" placeholder="Email" {...form.register('email')} />
        {form.formState.errors.email && <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>}
      </div>

      <Input placeholder="Nomor Telepon" {...form.register('phone')} />

      <div>
        <Textarea placeholder="Pesan Anda" {...form.register('message')} />
        {form.formState.errors.message && <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Mengirim...' : 'Kirim Pesan'}
      </Button>
    </form>
  );
}
