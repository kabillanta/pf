export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-200 py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
        <p className="text-white-500 text-sm font-medium">
          &copy; Kabillan T A | {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}