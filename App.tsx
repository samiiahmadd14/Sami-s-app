
import React, { useState } from 'react';
import { SAMI_ASSOCIATIONS } from './constants';

const App: React.FC = () => {
  const [associationName, setAssociationName] = useState<string>('');
  const [responsiblePerson, setResponsiblePerson] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!associationName.trim()) {
      setError('الرجاء إدخال اسم الجمعية');
      setResponsiblePerson('');
      return;
    }
    
    setError('');
    const trimmedName = associationName.trim();
    if (SAMI_ASSOCIATIONS.has(trimmedName)) {
      setResponsiblePerson('سامي');
    } else {
      setResponsiblePerson('ايمن');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAssociationName(e.target.value);
    if(error){
      setError('');
    }
  }

  return (
    <main 
      className="relative min-h-screen w-full flex items-center justify-center p-4 bg-cover bg-center overflow-hidden"
      style={{backgroundImage: "linear-gradient(to bottom right, #fefbf2, #fdf5e2)"}}
    >
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
        <h1 className="text-[10vw] sm:text-[12rem] font-extrabold text-amber-900/5 whitespace-nowrap" aria-hidden="true">
          مبادرات الخير
        </h1>
      </div>

      <div className="relative w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl shadow-amber-900/10 overflow-hidden">
        <div className="p-8">
          <header className="flex flex-col items-center text-center mb-8">
            <h1 className="text-5xl font-bold text-amber-900">استفسر</h1>
            <p className="text-amber-800/80 mt-2">
              ابحث عن المسؤول عن الجمعية
            </p>
          </header>
          
          <form onSubmit={handleSearch} className="space-y-6">
            <div>
              <label htmlFor="association" className="block text-sm font-medium text-amber-900/80 mb-2 text-right">
                اسم الجمعية
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="h-5 w-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>
                </div>
                <input
                  id="association"
                  type="text"
                  value={associationName}
                  onChange={handleInputChange}
                  placeholder="أدخل اسم الجمعية هنا..."
                  className="w-full p-3 pr-10 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 placeholder-amber-500 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all"
                  aria-label="اسم الجمعية"
                />
              </div>
              {error && <p className="text-red-500 text-sm mt-2 text-right">{error}</p>}
            </div>

            <div>
              <label htmlFor="responsible" className="block text-sm font-medium text-amber-900/80 mb-2 text-right">
                مسؤول عنها
              </label>
              <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.095a1.23 1.23 0 00.41-1.412A9.99 9.99 0 0010 12a9.99 9.99 0 00-6.535 2.493z" />
                      </svg>
                  </div>
                  <input
                    id="responsible"
                    type="text"
                    value={responsiblePerson}
                    readOnly
                    placeholder="سيظهر اسم المسؤول هنا"
                    className="w-full p-3 pr-10 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed"
                    aria-label="مسؤول عنها"
                  />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-amber-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-amber-900 focus:outline-none focus:ring-4 focus:ring-amber-800/50 transition-all duration-300 transform hover:scale-105"
            >
              ابحث
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default App;
