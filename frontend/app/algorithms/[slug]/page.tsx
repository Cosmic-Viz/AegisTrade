import { notFound } from 'next/navigation';
<<<<<<< HEAD

import { StrategyDetailDashboard } from '@/components/strategy-detail-dashboard';
import { getStrategyContent } from '@/lib/strategy-content';

export default function StrategyPage({ params }: { params: { slug: string } }) {
  const content = getStrategyContent(params.slug);
=======
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
  
>>>>>>> d6973517fb3e528e6688a856c55feb3b7f2fd371
  if (!content) {
    notFound();
  }

<<<<<<< HEAD
  return <StrategyDetailDashboard slug={params.slug} />;
=======
  return <StrategyDetailDashboard slug={resolvedParams.slug} />;
>>>>>>> d6973517fb3e528e6688a856c55feb3b7f2fd371
}
