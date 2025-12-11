import { Container, Title, Text, Grid, Paper, Divider } from '@mantine/core'
import ClassCard from '../components/ClassCard'
import WeekDay from '../components/WeekDay'
import { classes } from '../data/classes'




function HomePage() {
return (
  <Container size="xl" py="xl">
    <WeekDay />




    <Title order={2} ta="center" mb="md">My 4 Classes</Title>
    <Text ta="center" c='var(--text-muted)' mb="xl">
      Current Quarter
    </Text>




    <Grid>
      {classes.map((classItem) => (
        <Grid.Col
          key={classItem.id}
          span={{ base: 12, sm: 6, lg: 3 }}
        >
          <ClassCard {...classItem} />
        </Grid.Col>
      ))}
    </Grid>




    <Divider my="xl" />




    {/* Upcoming Assignments Section */}
    <Title order={2} ta="center" mb="md">Upcoming Assignments</Title>
    <Text ta="center" c='var(--text-muted)' mb="xl">
      Your Canvas assignments sync automatically
    </Text>




    <Paper shadow="sm" p="md" radius="md" withBorder>
      <div className="calendar-container">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDenver&title=Calendar&mode=MONTH&showPrint=0&showTitle=0&showCalendars=0&src=Y183ZDk5NmM5ODJkZGZlOTQ1ZTgyMTcyYjZlZTRkODgxZmVjNTM0MjIzOTU4MzQ2YjI0OGNhNWFlMTEzNjg4YTYxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZHY2czdkZTk2dnZlNmoybGs1azZvM3Q5NnBhbTcycXRAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23e4c441&color=%23039be5"
          className="google-calendar"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </Paper>
  </Container>
)
}




export default HomePage