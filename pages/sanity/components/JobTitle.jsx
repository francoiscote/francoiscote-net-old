import { Header, H2, Subtitle } from '../styles'

const JobTitle = ({ company, title, dateRange }) => (
  <Header>
    <H2>
      {company} <br /> <span>{title}</span>
    </H2>
    <Subtitle>{dateRange}</Subtitle>
  </Header>
)

export default JobTitle