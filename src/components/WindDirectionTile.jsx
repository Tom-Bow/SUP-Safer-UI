import beachImg from '../assets/swansea-beach.png';
import { ArrowUp } from 'lucide-react';

export function WindDirectionTile({ direction }) {
    const deg = direction ?? 0;

    return (
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${beachImg})`
                }}
            />
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative flex flex-col items-center justify-center h-full text-white">
                {/* arrow */}
                <div className="flex items-center justify-center
                    w-[28px] h-[28px] sm:w-[44px] sm:h-[44px]
                    rounded-full border border-white/70
                    bg-white/10">
                    <ArrowUp
                        className="w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] text-white transition-transform duration-700 ease-out"
                        style={{ transform: `rotate(${direction}deg)` }}
                    />
                </div>

                {/* <svg
                    className="w-[28px] h-[28px] sm:w-[40px] sm:h-[40px]
                     transition-transform duration-700 ease-out"
                    style={{ transform: `rotate(${direction}deg)` }}
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M12 4 L12 18 M12 4 L8 8 M12 4 L16 8"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg> */}
            </div>
        </div>
    );
}