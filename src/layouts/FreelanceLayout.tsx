import Paper from '../components/layouts/Paper';
import DownloadCV from '../components/ui/DownloadCV';
import FreelanceCta from '../sections/freelance/cta';
import FreelanceHero from '../sections/freelance/hero';
import FreelanceProcess from '../sections/freelance/process';
import FreelanceSelectedWork from '../sections/freelance/work';
import FreelanceServices from '../sections/freelance/services';
import FreelanceWhy from '../sections/freelance/why';

export default function FreelanceLayout() {
  return (
    <div className="flex flex-col">
      <Paper>
        <div className="flex flex-col gap-10">
          <FreelanceHero />
          <FreelanceServices />
          <FreelanceWhy />
          <FreelanceSelectedWork />
          <FreelanceProcess />
          <FreelanceCta />
        </div>
      </Paper>
      <DownloadCV />
    </div>
  );
}
