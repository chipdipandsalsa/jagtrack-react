import { Container, Title, Text, Paper, Button } from '@mantine/core'
import './CalendarPage.css'

function CalendarPage() {
return (
  <Container size="xl" py="xl">
    <Title order={2} ta="center" mb="md">Calendar & Deadlines</Title>
    <Text ta="center" c='var(--text-muted)' mb="xl">
      Your Canvas assignments automatically sync to this calendar. Never miss a deadline!
    </Text>




    <Paper shadow="sm" p="md" radius="md" withBorder>
      <p id="Blue">Blue: Assignments</p> <p id="Green">Green: Holidays</p>
      <p></p>
      <div className="calendar-container">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDenver&mode=AGENDA&showNav=0&showPrint=0&showCalendars=0&showTitle=0&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZHY2czdkZTk2dnZlNmoybGs1azZvM3Q5NnBhbTcycXRAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230b8043&color=%23039be5"
          className="google-calendar"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </Paper>




    <Text size="sm" c='var(--text-muted)' ta="center" mt="md" className="mobile-tip">
      <strong>Mobile Tip:</strong> For a better experience on small screens,{' '}
      <a href="https://calendar.google.com/calendar/ical/dv6s7de96vve6j2lk5k6o3t96pam72qt%40import.calendar.google.com/public/basic.ics" target="_blank" rel="noopener noreferrer">
        open calendar in new tab
      </a>
    </Text>

    <Button
      component="a"
      href="https://calendar.google.com/calendar/r/eventedit"
      target="_blank"
      variant="light"
      mt="md"
    >
    Quick Add Event
    </Button>


  </Container>
)
}




export default CalendarPage