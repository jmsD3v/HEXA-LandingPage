import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import teamMembersData from '../../data/teamMembers';

interface TeamMemberProps {
  member: (typeof teamMembersData)[0];
}

const teamMemberCard: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <Card className='max-w-sm mx-auto bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <CardHeader>
        <CardTitle className='text-xl font-semibold text-white'>
          {member.name}
        </CardTitle>
        <CardDescription className='text-gray-400'>
          {member.title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-gray-300 mb-4 text-balance'>{member.description}</p>
        <div className='flex flex-wrap gap-2'>
          {member.skills.map((skill, skillIndex) => (
            <Badge
              key={skillIndex}
              variant='secondary'
              className='bg-blue-500/20 text-blue-300 border-blue-500/30'
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default teamMemberCard;
