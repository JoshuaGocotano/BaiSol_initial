export const Footer = () => {
  return (
    <footer className="mt-20 border-t py-5 border-neutral-700 text-center">
      <div className="text-neutral-400">
        <p>
          &copy; {new Date().getFullYear()} SunVoltage Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
