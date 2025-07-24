"use client"

import * as React from "react";
import {
  Dialog as HeadlessDialog,
  DialogPanel
} from "@headlessui/react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Dialog = ({ children, open = false, onOpenChange }: DialogProps) => {
  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleChange = (value: boolean) => {
    setIsOpen(value);
    onOpenChange?.(value);
  };

  return (
    <HeadlessDialog open={isOpen} onClose={() => handleChange(false)} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* 🟢 Painel de conteúdo */}
        <DialogPanel
          className="relative bg-background rounded-xl shadow-xl max-w-lg w-full p-6 z-10"
        >
          {/* ❌ Botão de fechar */}
          <button
            onClick={() => handleChange(false)}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {children}
        </DialogPanel>
      </div>
    </HeadlessDialog>
  );
};

interface DialogTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
DialogTrigger.displayName = "DialogTrigger";

interface DialogContentProps {
  children: React.ReactNode;
  className?: string;
}

export const DialogContent = ({ children, className }: DialogContentProps) => {
  return <div className={cn("", className)}>{children}</div>;
};

interface DialogHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const DialogHeader = ({ children, className }: DialogHeaderProps) => {
  return <div className={cn("mb-4", className)}>{children}</div>;
};

interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const DialogTitle = ({ children, className }: DialogTitleProps) => {
  return (
    <h2 className={cn("text-xl font-bold text-foreground", className)}>
      {children}
    </h2>
  );
};
