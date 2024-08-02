import { Dialog, DialogPanel } from "@headlessui/react";

export default function Toast({ showToast, children }) {
  return (
    <Dialog open={showToast} onClose={() => null} className="relative z-40">
      <DialogPanel>
        {children}
      </DialogPanel>
    </Dialog>
  );
}
