
import React, { useState } from 'react';
import { TABLES } from '../constants';
import { Table } from '../types';

const Reservations: React.FC = () => {
  const [guestCount, setGuestCount] = useState(2);
  const [selectedTable, setSelectedTable] = useState<Table | null>(TABLES[3]); // Table 4 selected by default
  const [selectedDate, setSelectedDate] = useState('5');
  const [selectedTime, setSelectedTime] = useState('7:00 PM');

  const handleTableClick = (table: Table) => {
    if (table.status !== 'reserved') {
      setSelectedTable(table);
    }
  };

  const times = ['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column - Reservation Info & Map */}
        <div className="flex flex-col justify-start">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter text-text-light dark:text-white">Reserve Your Table</h1>
            <p className="mt-4 text-base md:text-lg font-normal leading-normal text-gray-600 dark:text-gray-400">
              Experience the warmth and elegance of North European cuisine. Book your unique dining experience with us in the heart of Hanoi.
            </p>
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mt-8 shadow-lg" 
                 style={{ backgroundImage: `url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200")` }}>
            </div>
          </div>

          <div className="w-full bg-white dark:bg-gray-800/50 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-text-light dark:text-white">Select Your Table</h3>
              <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> Available
              </span>
            </div>
            
            <div className="relative w-full aspect-[4/3] bg-gray-50 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 overflow-hidden group">
              <svg className="w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <text className="text-xs fill-gray-400 font-medium" text-anchor="middle" x="200" y="290">ENTRANCE</text>
                <path className="text-gray-300" d="M180 300 L180 295 L220 295 L220 300" fill="none" stroke="currentColor"></path>
                <rect className="fill-gray-200 dark:fill-gray-700" height="200" rx="4" width="80" x="300" y="50"></rect>
                <text className="text-xs fill-gray-500 dark:fill-gray-400 font-medium" text-anchor="middle" transform="rotate(90, 340, 150)" x="340" y="150">BAR AREA</text>
                <path className="text-blue-200 dark:text-blue-900" d="M20 20 L380 20" stroke="currentColor" stroke-dasharray="5,5" stroke-width="2"></path>
                <text className="text-[10px] fill-blue-400 dark:fill-blue-500 font-medium" text-anchor="middle" x="200" y="15">WINDOW VIEW (LAKE)</text>
                
                {TABLES.map((table) => {
                  const isSelected = selectedTable?.id === table.id;
                  const isReserved = table.status === 'reserved';
                  
                  return (
                    <g 
                      key={table.id} 
                      className={`cursor-pointer transition-opacity ${isReserved ? 'cursor-not-allowed opacity-60' : 'hover:opacity-80'}`}
                      onClick={() => handleTableClick(table)}
                    >
                      {table.type === 'round' ? (
                        <circle 
                          className={`${isSelected ? 'fill-secondary/20 stroke-secondary' : isReserved ? 'fill-gray-100 stroke-gray-300' : 'fill-white dark:fill-gray-600 stroke-green-500'} stroke-2`}
                          cx={table.cx} cy={table.cy} r={table.id === 6 ? 25 : 15}
                        />
                      ) : (
                        <rect 
                          className={`${isSelected ? 'fill-secondary/20 stroke-secondary' : isReserved ? 'fill-gray-100 stroke-gray-300' : 'fill-white dark:fill-gray-600 stroke-green-500'} stroke-2`}
                          x={table.x} y={table.y} width={table.width} height={table.height} rx="4"
                        />
                      )}
                      <text 
                        className={`text-[10px] font-bold select-none ${isSelected ? 'fill-primary' : isReserved ? 'fill-gray-400' : 'fill-gray-700 dark:fill-gray-200'}`}
                        text-anchor="middle" 
                        x={table.cx || (table.x! + table.width! / 2)} 
                        y={(table.cy! + 4) || (table.y! + table.height! / 2 + 4)}
                      >
                        {table.id}
                      </text>
                    </g>
                  );
                })}
              </svg>
              <div className="absolute bottom-2 right-2 text-[10px] text-gray-400 bg-white/80 dark:bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                Click on a table to select
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full border-2 border-green-500 bg-white dark:bg-gray-600"></span>
                Available
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full border-2 border-secondary bg-secondary/20"></span>
                Selected
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full border-2 border-gray-300 bg-gray-100 dark:border-gray-500 dark:bg-gray-700"></span>
                Reserved
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Reservation Form */}
        <div className="bg-white dark:bg-gray-800/50 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-fit">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-lg font-bold text-text-light dark:text-white">Reservation Details</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Select your party size, date, and time.</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-primary flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 size-10">
                    <span className="material-symbols-outlined">group</span>
                  </div>
                  <p className="text-base font-medium truncate text-text-light dark:text-gray-200">Number of Guests</p>
                </div>
                <div className="flex items-center gap-2 text-text-light dark:text-gray-200">
                  <button 
                    onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-bold">{guestCount}</span>
                  <button 
                    onClick={() => setGuestCount(guestCount + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                <div className="text-primary flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 size-10">
                  <span className="material-symbols-outlined">table_restaurant</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Selected Table</p>
                  <input 
                    className="w-full bg-transparent border-none p-0 text-base font-bold text-primary focus:ring-0 placeholder:text-gray-400"
                    placeholder="Select from floor plan..."
                    readOnly
                    value={selectedTable?.label || ''}
                  />
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4">
                <div className="text-primary flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 size-10 mt-1">
                  <span className="material-symbols-outlined">calendar_month</span>
                </div>
                <div className="flex-1">
                  <p className="text-base font-medium text-text-light dark:text-gray-200">Date</p>
                  <div className="grid grid-cols-7 gap-1 mt-4 text-center">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                      <span key={d} className="text-xs font-bold text-gray-500 uppercase">{d}</span>
                    ))}
                    {Array.from({ length: 14 }, (_, i) => {
                      const day = (i + 1).toString();
                      const isDisabled = i === 0 || i === 7; // Mock disabled dates
                      const isSelected = selectedDate === day;
                      return (
                        <button
                          key={i}
                          disabled={isDisabled}
                          onClick={() => setSelectedDate(day)}
                          className={`h-10 w-full flex items-center justify-center rounded-full text-sm font-medium transition-colors
                            ${isDisabled ? 'text-gray-300 cursor-not-allowed' : 
                              isSelected ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <div className="text-primary flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 size-10 mt-1">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div className="flex-1">
                  <p className="text-base font-medium text-text-light dark:text-gray-200 mb-2">Time</p>
                  <div className="grid grid-cols-3 gap-2">
                    {times.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        disabled={t === '8:30 PM'}
                        className={`py-2 px-3 rounded-md text-sm font-medium border transition-all
                          ${t === '8:30 PM' ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 
                            selectedTime === t ? 'border-primary bg-primary/10 text-primary ring-1 ring-primary' : 
                            'border-gray-200 dark:border-gray-600 hover:border-primary hover:text-primary'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700" />

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-text-light dark:text-white">Your Information</h3>
              <div className="grid grid-cols-1 gap-4">
                <label className="flex flex-col gap-1.5 w-full">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</span>
                  <input className="form-input w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" placeholder="John Doe" type="text" />
                </label>
                <label className="flex flex-col gap-1.5 w-full">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</span>
                  <input className="form-input w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" placeholder="you@example.com" type="email" />
                </label>
                <label className="flex flex-col gap-1.5 w-full">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</span>
                  <input className="form-input w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" placeholder="+84 123 456 789" type="tel" />
                </label>
                <label className="flex flex-col gap-1.5 w-full">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Special Requests (Optional)</span>
                  <textarea className="form-textarea w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700" placeholder="e.g., dietary restrictions, birthday celebration" rows={3}></textarea>
                </label>
              </div>
              <button className="w-full flex items-center justify-center rounded-lg h-12 bg-primary text-white text-base font-bold hover:opacity-90 transition-opacity">
                Confirm Reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
