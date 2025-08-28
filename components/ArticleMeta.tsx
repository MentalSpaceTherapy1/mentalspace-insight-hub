import { User, Shield, Calendar, Clock } from 'lucide-react';

interface ArticleMetaProps {
  author: string;
  reviewedBy: string;
  publishDate: string;
  modifiedDate: string;
}

export function ArticleMeta({ author, reviewedBy, publishDate, modifiedDate }: ArticleMetaProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-muted/50 rounded-lg p-4 space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Author:</span>
          <span className="font-medium">{author}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Shield className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Reviewed by:</span>
          <span className="font-medium">{reviewedBy}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Published:</span>
          <time dateTime={publishDate} className="font-medium">
            {formatDate(publishDate)}
          </time>
        </div>
        
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Last reviewed:</span>
          <time dateTime={modifiedDate} className="font-medium">
            {formatDate(modifiedDate)}
          </time>
        </div>
      </div>
    </div>
  );
}