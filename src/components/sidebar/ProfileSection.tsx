
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/charles_plp.jpg";

export const ProfileSection = () => {
  return (
    <div className="flex flex-col items-center mb-6 mt-4">
      <div className="relative h-24 w-24 mb-3">
        <img
          src={profileImage}
          alt="DevOps-Charles Mbillo"
          className="rounded-full h-full w-full object-cover border-4 border-purple-100" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/default-profile.png';
          }}
        />
        {/* Online status indicator */}
        <div className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-white">
        </div>
        
        {/* Professional Badge */}
        <Badge 
          className="absolute -bottom-2 -right-2 bg-purple-700 text-white border-2 border-white px-2 py-0.5 text-[10px]"
        >
          AWS Certified
        </Badge>
      </div>
      {/* Name and Title */}
      <span className="font-bold text-xl text-purple-700 mb-2">Charles Mbillo</span>
      <span className="text-sm text-gray-500">Tech Solutions Developer</span>
    </div>
  );
};
