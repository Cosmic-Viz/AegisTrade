import { notFound } from 'next/navigation';
import { StrategyDetailDashboard } from '@/components/strategy-detail-dashboard';
import { getStrategyContent } from '@/lib/strategy-content';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function StrategyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const content = getStrategyContent(resolvedParams.slug);
  
  if (!content) {
    notFound();
  }

  return <StrategyDetailDashboard slug={resolvedParams.slug} />;
}
