import { Clock, Sun, Coffee, Camera, ChevronRight } from 'lucide-react';

const TREKKING_TIMELINE = [
  { time: '02.00 – 03.00', text: 'Pick up at hotel (depending on your location)', icon: '🚗' },
  { time: '04.00', text: 'Start trekking to Mount Batur', icon: '🥾' },
  { time: '05.30', text: 'Arrive at the summit of Mount Batur', icon: '⛰️' },
  { time: '06.00', text: 'Breakfast at the peak & sunrise moment', icon: '🌅' },
  { time: '07.00', text: 'Relax and enjoy the panoramic view', icon: '✨' },
  { time: '07.30', text: 'Start descending to the starting point', icon: '⬇️' },
  { time: '08.20', text: 'Finish trekking', icon: '🏁' },
  { time: '08.30', text: 'Return to hotel', icon: '🏨' },
  { time: '10.00 – 11.00', text: 'Arrive at hotel', icon: '✅' },
];

const TrekkingTimeline = () => {
  return (
    <div className="container mx-auto px-6 from-white to-orange-50/30 p-6 md:p-8 rounded-3xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h5 className="font-black text-zinc-800 uppercase tracking-widest text-sm flex items-center gap-3">
          <div className="bg-orange-500 p-2 rounded-xl shadow-lg shadow-orange-500/30">
            <Clock className="w-4 h-4 text-white" />
          </div>
          <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            Journey Timeline
          </span>
        </h5>
        <div className="flex items-center gap-1 text-xs text-zinc-500 bg-orange-100/50 px-3 py-1.5 rounded-full">
          <Sun className="w-3.5 h-3.5 text-orange-500" />
          <span>9 Activities</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-[115px] md:left-[125px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-300 rounded-full opacity-30"></div>
        
        <div className="space-y-3">
       {TREKKING_TIMELINE.map((item, idx) => (
  <div
    key={idx}
    className="group flex items-center gap-4 p-3"
  >
    {/* Time + Icon (fixed width) */}
    <div className="flex items-center gap-2 w-[120px] shrink-0">
      <span className="text-xl leading-none">{item.icon}</span>
      <span className="font-mono font-bold text-sm bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
        {item.time}
      </span>
    </div>

    {/* Dot timeline (fixed center) */}
    <div className="relative flex items-center justify-center w-4 shrink-0">
      <div className="w-2 h-2 bg-orange-400 rounded-full group-hover:scale-150 transition-all duration-300"></div>
      <div className="absolute w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-20"></div>
    </div>

    {/* Activity text (always aligned) */}
    <div className="text-zinc-700 text-sm font-medium leading-relaxed flex-1">
      {item.text}
    </div>

    {/* Chevron */}
    <ChevronRight className="w-4 h-4 text-orange-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
  </div>
))}

        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-6 pt-4 border-t border-orange-100/50 flex items-center justify-between text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <Coffee className="w-3.5 h-3.5 text-orange-400" />
          <span>Breakfast included at the summit</span>
        </div>
        <div className="flex items-center gap-2">
          <Camera className="w-3.5 h-3.5 text-orange-400" />
          <span>Photo stops available</span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-300/10 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default TrekkingTimeline;