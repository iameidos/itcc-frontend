import { ClockAlert, CheckCheck, ClipboardClock, FileLock, FileXCorner, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ButtonVariant = React.ComponentProps<typeof Button>['variant'];

type StatusType = 'active' | 'pending' | 'conducted' | 'suspended' | 'canceled' | 'withdrawn';

const statusConfig: Record<
  StatusType,
  {
    label: string;
    variant: ButtonVariant;
    icon: React.ElementType;
  }
> = {
  active: {
    label: 'Active',
    variant: 'active',
    icon: BadgeCheck,
  },
  pending: {
    label: 'Pending',
    variant: 'pending',
    icon: ClockAlert,
  },
  conducted: {
    label: 'Conducted',
    variant: 'conduct',
    icon: CheckCheck,
  },
  suspended: {
    label: 'Suspended',
    variant: 'suspend',
    icon: ClipboardClock,
  },
  canceled: {
    label: 'Canceled',
    variant: 'cancel',
    icon: FileXCorner,
  },
  withdrawn: {
    label: 'Withdrawn',
    variant: 'withdrawn',
    icon: FileLock,
  },
};

export default function StatusButton({ status }: { status: StatusType }) {
  const cfg = statusConfig[status];
  const Icon = cfg.icon;

  return (
    <Button type="button" variant={cfg.variant} size="default">
      {cfg.label}
      <span>
        <Icon size={16} />
      </span>
    </Button>
  );
}
