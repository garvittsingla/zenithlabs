import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { XEmbed,YouTubeEmbed,PinterestEmbed,InstagramEmbed ,LinkedInEmbed   } from 'react-social-media-embed';


// Define the type for the content data
interface ContentItem {
  _id: string;
  title: string;
  platform: string;
  description: string;
  tags: string[];
  url: string;
  userId: string;
  createdAt: string;
}

interface ContentCardProps {
  item: ContentItem;
}

const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  // Format the date
  const formattedDate = new Date(item.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });



  

  return (
    <div className="bg-zinc-950 rounded-lg overflow-hidden shadow-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 w-64 ">
      {/* Embedded content section */}
    <div className="h-64 bg-gray-900">
        {item.platform.toLowerCase() === 'x' && (
            <div className="w-full h-full flex items-center justify-center">
                <XEmbed url={item.url} width={300} height={250} />
            </div>
        )}
        {item.platform.toLowerCase() === 'youtube' && (
            <div className="w-full h-full flex items-center justify-center">
                <YouTubeEmbed url={item.url} width={256} height={256} />
            </div>
        )}
        {item.platform.toLowerCase() === 'instagram' && (
            <div className="w-full h-full flex items-center justify-center">
                <InstagramEmbed url={item.url} width={256} height={256} />
            </div>
        )}
        {item.platform.toLowerCase() === 'linkedin' && (
            <div className="w-full h-full flex items-center justify-center">
                <LinkedInEmbed url={item.url} width={256} height={256} />
            </div>
        )}
        {item.platform.toLowerCase() === 'pinterest' && 
            <div className="w-full h-full flex items-center justify-center">
                <PinterestEmbed url={item.url} width={256} height={256} />
            </div>
        }
        
    </div>
    

      {/* Content information */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-gray-800 text-blue-400 rounded-full">
            {item.platform}
          </span>
          <span className="text-xs text-gray-500">
            {formattedDate}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
          {item.title}
        </h3>
        
        <p className="text-gray-400 mb-4 text-sm line-clamp-3">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.slice(0, 4).map((tag, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
              {tag.length > 20 ? `${tag.substring(0, 20)}...` : tag}
            </span>
          ))}
          {item.tags.length > 4 && (
            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
              +{item.tags.length - 4} more
            </span>
          )}
        </div>

        {/* Action button */}
        <Link 
          href={item.url}
          target="_blank"
          className="inline-flex items-center justify-center w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
        >
          Visit Original <ExternalLink className="ml-2" size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ContentCard;