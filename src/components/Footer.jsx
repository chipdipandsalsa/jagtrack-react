import { Container, Text, Group } from '@mantine/core'


function Footer({ schoolName, email }) {
 const currentYear = new Date().getFullYear()


 return (
   <footer style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f8f9fa', borderTop: '1px solid #dee2e6' }}>
     <Container size="xl">
       <Group justify="space-between" align="center">
         <Text size="sm" c='var(--text-muted)'>
           © {currentYear} {schoolName}
         </Text>
         <Text size="sm" c='var(--text-muted)'>
           Contact: {email}
         </Text>
       </Group>
     </Container>
   </footer>
 )
}


export default Footer
