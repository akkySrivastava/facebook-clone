import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { useStateValue } from './StateProvider'

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className = "sidebar">
            <div className = "sidebar__top">
                <SidebarRow 
                    src = {user.photoURL}
                    title = {user.displayName}
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png"
                    title = "COVID-19 information Centre"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
                    title = "Friends"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
                    title = "Groups"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
                    title = "Vidoes"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png"
                    title = "Ads"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/p1ZJABzCAAS.png"
                    title = "Blood donations"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/Doj4fJpfxHx.png"
                    title = "Business Suite"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/cT5nPnO8Wsc.png"
                    title = "Crisis Response"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png"
                    title = "Events"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/SWt1APlIN82.png"
                    title = "Films"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png"
                    title = "Friend Lists"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png"
                    title = "Fundraisers"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png"
                    title = "Games"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/5EU1wNhLmR6.png"
                    title = "Gaming video"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png"
                    title = "Jobs"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Nl9CPY6q_n-.png"
                    title = "Live videos"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png"
                    title = "Memories"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png"
                    title = "Messenger"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png"
                    title = "Messenger Kids"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png"
                    title = "Most recent"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png"
                    title = "Offers"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
                    title = "Pages"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png"
                    title = "Recent ad activity"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
                    title = "Saved"
                />
                <SidebarRow 
                    url = "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png"
                    title = "Weather"
                />
            </div>  
            <div className = "sidebar__bottom">  
                <div className = "sidebar__bottom--title">
                    <h3>Your shortcuts</h3>
                </div>
                <div className = "sidebar__bottom--content">
                    <SidebarRow
                        src = "https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-9/75317333_108050823979255_17253192865677312_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=BMyeUf9IEdcAX_WViQb&_nc_ht=scontent.fpat2-1.fna&oh=012f1f9d3afcaefd93bd1d0b805e8d25&oe=5FE4FE9D"
                        title = "Projects On Real Life System"
                    />
                    <SidebarRow 
                        url = "https://avatars2.githubusercontent.com/u/56448109?s=60&v=4"
                        title = "Code With Akky"
                    />
                    <SidebarRow 
                        url = "https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-0/p180x540/127187656_2715077608712917_1635609771179964681_o.jpg?_nc_cat=1&ccb=2&_nc_sid=825194&_nc_ohc=-489LdkVWKQAX8ucsB0&_nc_ht=scontent.fpat2-1.fna&tp=6&oh=614db2bfd90b4bdfbb433af1e4e79e6c&oe=5FE6A601"
                        title = "Accenture India"
                    />
                    <SidebarRow 
                        url = "https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-9/12006118_10153732926228304_8814249759706027421_n.jpg?_nc_cat=106&ccb=2&_nc_sid=825194&_nc_ohc=3sAR1VC3kJMAX_7FjD7&_nc_ht=scontent.fpat2-1.fna&oh=b44549047ea589d87e94ecf99421b9f0&oe=5FE6DD26"
                        title = "Github Social Coding"
                    />
                    <SidebarRow 
                        url = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQERMQExMQFhUXEhUQEBcXFRUVEhcVFRUWFhcSFRUYHSggGBolHRUVIjEhJSkrLjAuGSA3ODMtNygtLisBCgoKDg0OGxAQGy0lHSUrLS8rLTArLS0rLS0tLTAvKy0tLS0tLS0tLS0rLS0tLS0tLS0rLS0tKy0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwQFBgcCAQj/xABPEAABAwIDBQQECgcEBgsAAAABAAIDBBEFEiEGEzFBcVFhgZEHIjKhFCNCUmJygpKisSRzk7PBwtJDRFR0MzVTY2TRFRYlNIOjstPh8PH/xAAaAQACAwEBAAAAAAAAAAAAAAAABAIDBQEG/8QAMhEAAgIBAgUCBAQGAwAAAAAAAAECAxEEEgUTITFBIlEygaHRIzOx8FJhcZHB8RRCcv/aAAwDAQACEQMRAD8A3FCEIAEIQgAQhCABCFF4/tDTULN5USsjBvlHF7yOTGDVx6BAEokKysjhaZJZI42ji57g1o8Ssd2h9LdRMSyijELOG9kAfMR2tZ7LPHN4Kh1jpal+8nlllf2yOLiO5t9GjuFgr4aeciErEjasV9LGHQ3Ebpahw5RMOX9o/K0jvBKq9d6ZJ3XEFJG0cjLI558WtDfzVAipB2KTpMBnk9iGQ+Fh703HRpfEyp3PwSc3pNxZ/CSBn1IR/OXJk7bjFyb/AA2QdI4Lfu1IwbD1bvkNHUp2z0e1J4ujHmpcqhd2jm6bIIbb4uP77J+zp/8A207h9JWLM4yxP+vC3+TKpV3o8qPnxnzTafYKqbwDHdCjl0Pyg3THdD6Yqptt9SwP7TG58R8nZ/zVnwv0u4fLYSieA3t67M7L/WjzWHeQFmtZs5UR+1C/qBce5RMtJyIsovRxfws6rmu59K4bikFS3PBLFK3tY9rh424J4vleKJ8TxJE+SN44PY5zH/eaQVddn/SrW01mVLRUx8M2jJwO24GV/QgHvSs9NOJZGxM3NCgtmdraTEW3glBcBd8bvVmb1YeXeLjvU6lywEIQgAQhCABCEIAEIQgAQhCABCEIAEEpKqqWRMdLI5rGNaXvc42a1o1JJPALDNvvSBJiJdT05dHS8HHVsk4+lzbH9HiefYJwg5vCONpFp219KjYi6noMskg9V8x1hYeYYP7Rw7fZ66hZTO6WokM08j5JHe095ueg5AdwsAvaemACtOz+zL57PfdrPeei0q9PCtbpC8puTwiDoMNfKcsbS4938SrnhOwhNnTOt9Fv8SrVh9FHA0NjaB+ad7xQnqX2h0OqteRvh+B00HsRtv2nUqTa4DhYJpvEbxLNt9yxdB5vEbxM94jeKODo83iN4me8RvEYAdl91HV+DU849eNvW1ilt4jeKSyuxx9SmYtsJxdA/wCy7+BVMxHC3xOyyMLT7j0K2beJtW00czS17QR3pmGpkukupW614MPMLmOEkbnMe05mOaS17T2hw1C0jY30ruYWwYjqNGtqGgC365g5fSaOo4lRe0Gyjorviu5nMcx/zVRqKa6nOiFq3RIqbi8M+n4ZWvaHtc1zXAOa4EFpB1BBHELtfO+xO2c+FPyHNJSk3fFzZc6vhJ4HmW8D3HVb5hGKQ1cLKiB4fG8XaR5FpB1DgdCDqCs2dbg8MZUkx4hCFA6CEIQAIQhAAhCEAC4lkaxpc4hrWgucSbAAC5JJ4BdrGfS9tgZnnDYHHdtP6W4fLeNdwD80aF3adORBlGLk8I43ghfSHtm/FJdzES2kY71RqDM4HSV4+aPkt8TrbLX4IbBeU8Ngp/Z7C98/M72G8e89i16qo1RyxSUnJ4H+zOAZ7SyD1fkjt7yrsxwAsNByTNjrCw4cl7vEtZNzeWWxW1DzeI3iZ7xG8VeCQ83iN4me8RvEYAebxG8TPeI3iMAPN4jeJnvEbxGAHm8RvEz3iN4jADzeI3iZ7xG8RgB4XqqbS7Ph15YhY8XN7VP7xGdThJweUcaTMongvdP9jdqJcJnztu+B5HwiLt5bxnISAeY0PIib2owoA75g0Ptj+Kqk8N01OuN0coqjJweD6Xw6vjqImTxOD43tDmOHAg/keVuScrA/RjtecOn+DTOPwWZ/PhDIdBIOxp0DvA9t98WTODi8MaTygQhCgdBCEIAEIXhKAKl6S9qv+jqT4sjfykxU47Db1pSOxo95aOawWjh5m5PEkm5JPEkniVNba42cSr5JgbxMO5phy3bT7f2jd3QtHJNI4rBaWkrSWWL2y8HdPCXuDRxJsr3QQiJgYOQ16qu7PUupkPLQKwZ1dfPLwQgsdR1vEbxNc6XbTOy7x2WOP58jmxx+DncfBLvC7lh3vEbxNXVlKNDVNJ+hFNIPvBtl1FNTv0ZVQk8AJA+Ak9g3gAPmob4e53DHG8RvEjUQvjOV7S08RfmO0HmO8JPOp9Dg63iN4mudGdGEA63iN4mudGdGEA63iN4muddwsc8hrQXE8ABc+SOgC+8RvEjO6KIkS1EDHDixpdLIO4tiBseqSFbSHQVQH1oJ2t88psob4e53DHe8RvFy2mc5pfG6OZo4uieJAPrAat8Qm2dSWH2ODiWzgWngRYqjYlS7qQt5cW9Fcs6h9oafM0P5jj0V9M9rwQmsop1ZBcFbD6HdqjUwGildeanaMhJ1kg4NN+Zbo0/ZPNZY+K6RwrEX0FVFVx3vG672j5cZ0fH4tvbvseShq601lHapeD6eQkaKqZNGyWMhzHsbIwjgWuFwfIpZZgyCEIQAKn+lTGjS4e9rTaSc/Bo7cQHg53DsswO17SFcFi3pcxDf4gynB9WCPX9ZLZzvwiPzKEBTaCmsAn27S0ENglRGn424WChxyyXw5mWNo7rp0xpcQ0Akk2AGpJPIJGPQDonFVK6ENgjuKiVuZ7hxhhdwt2SPHPiG9hKplb5JqJ7PViF25ha2aoBs9x9aCE/Nt/ayD7oPbZPKHZWSodvahz5H9rze3c0cGjuAAUzsps02Jo0VxiiDRYKhty7k0sFZg2SjA9kJtiOx8bgfVCuSFwDJpYZaD1CHS09/WiJ1Z9OFx9hw7OB59q6qYw3K5rs0b254njg5p7uRBuCORC0DHMNbIw6LPaSEsM9IeQNVB3FthKwdxaQ63a0qcJuJxrIndF1xdF1bvIYO7ouuLoujeGBxSwmR2UEDiXE6Na0C7nuPIAarxj5Kq8NPnjp72c4XbLP9J54tZ2MHLjrw8qgRCyEe1UOOfugiI9X7T/cwq9bN4U2Ng0VU5t9CaWCIwvY2NoHqhP5dk4yPZCtACFAkZriWxxjdvYi+N49lzCWuHiFHDECXbqsDWPOjKgDKxx7Kho0H1wOo5rWXsB0KrO0mz7ZWnTkhNrsc7lOqInRuLHCxHEfxB5jvTeduZpHaEpQZgRQS+0AfgTz3amlcew/J7DpzC4KvjaQcSsOisbJnWU9wpmdnrHqkJYrhMStyitRwy/8AoVxneU0lG4+tTvvHfjupCSB4OzjuGVaOsC2Br/gmKQk6NlvSv/8AEtk/G1nmVvqQfcYBCELgAvnaoqPhNVPUHXeTPe36uY5B4NDR4Ld9pKrc0lTLzZBI4dQw299lheDQWaOirnPDRJLoPGxr3dp1u0ZEc45sH+HZBeWTWOJhmkHaG8GDvc7K3xUhshQOme6pl1fI4yPPeeQ7gLAdwChqttqZsfOeoAP6uAZz+N7PJaDs3TBkY6KcXuWTmME7C0NFglcyQDl0HKQC10JIOXQcg4eytuCFnWNxZK6ncOcoiPSUGMjyctELtFQNoXZqymaP8REfAPBPuBXG8HSouzAkXOht5IzO7SnMwu5x7XE+ZuuMir5x3aI53dq63ru1KZEGNHODaTdFHnrGNP8AZ08EfmzeE+chWlUzLNAWd4e+1c4/Oip3joYGD8wVosTvVCsTysnBRF1wXLwuXTh3mXD9RZcly5LkHShbc4RcZ23DgczSOIcDcOB7QQomoqN9HHVWAMgIlA4NmjOWQW5Amzh3OWgY5AHxnos3oWWFZT/NcyrYPHdSe50fkoyeFkCPcy5uvDGnWRGRQ5x3YVzFWOYQ9ujmkPYexzTcHzAX0Vh1WJoY5m8JI2SDo5od/FYNisOhWtejSp3mGU30Wui/Zvcwe4BEZ5kSa6FnQhCsIFa9I8uXDKk9rWM+/Kxn8yy7CotAtM9J3+rZfrw3/bMWfYWzQJDVT2y+RfXHMRbdo3adbtG7SnOJ7BCub69CPoTu8TKAf/SFomGaRjos7xn1fgcnJr5oXdSWSN/n8le8HnzRjotTTy3Vpi81hkqHLoOSAcug5XkRYOXQckA5dZkAFXNlaSs7fPvK10nKGKSXuzuG7YOt33+yrDtTiwjjdryVao4CyD1haSdwnkHNrACImHwJdb6QS+psUIf1JQjljTdo3adbtG7WZzhjYNd2jdp1u0btHODYEsuSSlm5FjqZ/c6J2Zvm1/4VouHVGdgKz40xmifAPaNpYP1rL2b3ZgXN8QpfY/GM7ADoeBB4g8wQtHS2qcMexROOGXMuXhck868Lk0QOy5cly4LlyXIA5qzdpWcxs/TpR20lQD4ZXfm0K/YhNlYVn2HOz1dTJyZTPZ9qV7GgeQf5Kq94rbOx7nG7Ru063aN2srnDOwiMSi0V69EMl6GRvzKqRvm2N/8AOqhiLPVVr9EH/dqj/NH91EmdNZumRnHES+IQhaAuV/b6kM2H1DW8Q1sv7J7ZCB4NKzXBX3AW0uaCCDqCLHosY+CGkqpaY8GPIZ3sOrD90hZnEYtJSGtO8pol92jdpxELhdbtYfOGdgyraEzwSQt9vSaD9bHf1R9Zpc3xCV2RxkOaAehHPoU5DbajqFGYrg73SGppgN4dZ4dBnPOSLlmPNvPiNeOloNdGL2TfR9mL3VP4kXuOQHVKByz/AAzasD1H3a4aOa4Frgewg6hTH/WiO3tBbuRQtOdReK4u2Jp1VXrtrQTkZdzjo1rQXOPQDUpGLB5ZjvKsuYziIQfjXfrCP9G3u9roqbtRXSszf3JRi5PCOKZprJDPIP0djvVB/tpAfYHawH2j4dtpCYl7i52pJuU6eL2AADWgNY1os1rRwa0cgvGxXvcgAAuc4mzWtGpc48gAvO6jWu6efHhDsKtqGe7SzqFwF3ANHIvc1g/EQqXje20jyYqG8cfAzkfHSd7L/wCib+Loqu+g3js8hc9x4ueS5x6udqVfDTyazJ4Lo0yka5HROf7GV/1Hsf7mkpIxW0I15rKP+jQCHN0I1BGjge0EahWDB9sp6ciOqzVEPC51qIx2skPtD6Lr9Quz08sel5OyolEu4ZbUdQmuKRuica2IaE3q2D5Lv9uB80/K7Drz0koiyRjJY3B8b2543jg5p7jqCOBB1BSkRLTmHH/7oRzCWp1cqZ5/uimdW5EjgmNtlaNVMiQFUGqwVzSZaQhp4ugJs0n/AHLjoPqnwPJe0m1Bjdu5Q+N44teC13kfzXoqNTXcswfy8iMoOLwy+ly4c+yrQ2ojt7QUXim1zQLA6nQAcSewBXkR/tTjAYw68iorAqQx0+Z4tJUPE7hzEYBETT1u532gkqDBpJ3ioq2lrB60cDvbkPEGUfIZ9E6nuHGdlu4lx4nUrF4hrov8ODz7/YZpqfxMZbtG7Trdrl7bBZXOGthB4u6wKuPonp3NonvI0kqHyM72hrI7+bHKi4q10sjYY9XyPEbOrja57ua2XDaJtPDHAz2WMaxvgLXPeeK2eHRbzIo1HSOByhCFrCYKhekvDLGKtaPZtDN9Un1HHoSR9odivqQrqRk0b4ni7XtLHDuItp2HvVV9Ssg4k657JJmbUFU3JmcQGgXcSbAAcSSeChqzbWMEiCJ8v0id2w9NCT5BRG08EsU3wBxNmOzPPAPb/ZnoRrbt6J1QYaABovMf8eNfWzv7G3VXzO3YUbtrID69KLc8st3eALLHzCsWD43BVaRu9caljvVkHfbmO8XChX0DTyURX4NY523a4G7XAkOB7QRwUXXTPoujLJ6ZrqjQ6qnZMAJY4pbcM7A5w6O9oeaZjAaS9/g0f35SPLPZQmzO1JLm01UQHn1Y5eDXnk1/IO7DwPceNyypOy2/TvZua/o3gVdMH3Q1pomxAiJkcQPHdsawnqRqfNe7tOMqMqWd7by2TVaXYbbtU30l4mWMioWGxlG+qLcd2CRHH0c4OcfqjtV7yrKdtHF+KVN+DN1G3uDYYzbzLj4p/hv4l2X4Wf3/AHObeqRG00IaEuvQ1GVbjY4uh4kpogQlsqMqMgTHo3xIsmfQuPqSh0sH0ZmC7mj67QfFo7Vf92slw9xjraSQcRVQ+Rka1w8QSPFbK9liR3kLG4n6LFJeV9UKOOJNDTdrqZge3JI1kjfmyNa9vhm4eCXyoyrNV7TygcE+5FPwGkJuaaPwdK0eQdZOaSjihN4oYYzwzNYM/wB83d708yqtbTbSiA7iEB03yidWR35u7XfR8+9iF99z2KTfzeCHJgvA/wAWxSGmGaZ4BPsji931WjU9VWZttXE/F0xLeRfJld90NNvNR1LhbpHGWVznvOrnO1J/5DuGilo8PaOSdjXVD4vU/oMw07l3OKfbcA2mgewfOY7eAd5BAPldTs1fHJGJI3BzSLgjh/8AB7lXK3DgQdFD4QyVtQKWPXfOysbyEnzu4Wvc93cpciFnWvo/YhZVs79jQ/R1he+qJKxw9WO8cPfI4es4dGm32j2LSUxwXDWUsEcDODG2J5ucdXOPeSSU+XpdPVyq1ExbZ75ZBCEK8rBCEIAxj0haYu/NfWKItv2WPDuvm96Wpx6oVo9K2Db2mbVtHxlOczu0wu9seGjvsntVRwmbM0Lz3E63Gefc3uH2pwx7Dyy8cy6UsvbLKyaGSAxnCg9p0UxsVjrn/okxJkYLxuPGRg5E83N9415FLPjuLKs4zSuie2aPR7HB7D3jt7uRHYVbhXQ5cvk/Zit0MepGmITPB8QbUwsmbwcNR81w0c09CCE8WPKLi2n3KQWVbTtvilX+sZ+5jWqrMNo2/wDadX+sZ+5jWnwl4sl/5/yjn/ZDTIjInORGRbG4uyNsiMic5EZEbgyR4b+kU3+Zg/esWyS+0ep/NZE5v6RTf5mD96xa7L7R6n81lcVednzKX8RwhCTqZ2xsdI82a1pe49gAuVkJZOkJtbjhpmCOPWaS4ZzyN5yEfl39Cqxg+GW9Z1ySczidSSdSSeZXFJmq531LwbuPqj5rB7LB0HvueasccdhZbEYqiGxd/P7/AJFtMM+pibY7L2yUsiyryN5G8w0KhcD1xWjDb334OnGwDs3ha6lcSlytKmPRFg+YzYg8akmCn7mg/GPHU2b9l3atPhtblPIjr7VGGDTEIQvRnnwQhCABCEIATqIWyMdG4Xa5pY4docLEeRWH4NE6F8lO72o5HxHvLHFt/G11uix/aSDdYrUgcHlko+1G2/4g5ZvE4Zqz7D2gnizA8svbLtoXtl5fJuZOLJpiFPmaU/svHsuEKWHki+qIbYWqMc01KeDvj4+os148RlPgVdlnNW/4PVQz8mygO+q71Xe5xWjKGuj6lNeV9UKLplAsz2g/1nV/rGfuY1piz/bmm3Vc2e3qzxtN/wDeRARuH3RH5qzhkkrWvdfZkZdGmN8iMiWjFxdd5Fq7izI2yIyJzkXLm2F1zcGSLkH6RTD/AImD96xaxL7R6n81mmz9P8IxCEWu2J3wl/cItW/jyBaQSs3icvVGP8v1K08yYKq7eVZyR0zeMrsz/qMINvFxb5FWpUTEn7+vkPKPLC37Iu78RcltHHNm5+Ov2JP2HuFUuVoT6y7jZYBe2V0p5eRuPRCVkWSll4QuZJZK1tRPlYbceXXsWx7N4aKWkgp/9nE1ru99rvd4uJPishkh31bSw8nVMWb6rXhzh5ArcF6fhUMVtmLxCeZpAhCFqGeCEIQAIQhAAss29bbFG99LEfxyj+C1NZdt7rije6ljH/mTJLiH5DGdJ+YhRg0C6suo26BdWXjWzcycWXtl3Ze2XMhkqm1tNmY7ornhNTvYIZfnxMeepaCfeq9tFHdh6J7sZUg0cTTxbmZ917gPdZW3+qhP2f6/6F38ZPqPx/CG1kBhcQ1wO8hf8yQCwJ+iQSD3HuUgEJKE3CSlHugaysGWxTyU8joJ2lkjeIPMcnNPymnkQpJk7TzV2xPDYapgZPGHgeyblsjfqPGo6cFWp9gwD8VVSNHZJGHn7zS38lsV62ma9fpf0IdUR7pgOai6yuLyIowXPccrGtF3OJ5AKxRbBkn4yrcR2RxWP3nOIHkrFg+C09IDuWWcRZ0jjnlcOzMfZHc2wXZ62mCzH1P6B1fYa7K4F8DiOexnks6cjUNA9mFp5gXNzzPgplCFj2WSsk5S7snFYQE217NSqDs0M5dKeL3ukPVxLv4q3Y3VBlPMeYifbrlNlXtmIrRjomtP6apP3wC+JE1lXlkrZeWUMjGRKy5eNEtZcyN0XUwyQWAtvi9GPpyHyglP8FsyxvZ/TGKP68o84JVsi9hw38hGJrPzAQhCfFQQhCABCEIAFlG1kmfFpfoRxR/hz/zrV1i7qne19XJ21D2jow7se5oWdxSWKMDWkX4hYmcAvV43gvV482QQhC4BG4227D0ULgW/hpxNu3GHePGcagEONw62rdeZ0U3jTrMPRWX0Vi+Hi/AzTeWchbHDtPHURcJCeps5bUkQdBjDXW1UtFOHJzjWwsUhMlOdw/jYC8JP1Pk/Z8iqlVtqqI2njcG3sJB60R+0OHQ2Ko1fCbKuqWUdrvhPt3LShQlHjLXc1JMrWlZMq5R7lw5Qmzq1oTKoxZo5oVcn4AlHyAKPrMSDVCS4u6V+7ia97zwawFzuthy71OYTsNLMQ+reWN47phu89znjRvQX6haGl4bZa+xXZbGC6sq2L17545Wxtc4NYTIQPVa3tceAUhs8Pix0V22qoIqfC6mOJjWNELjZot2XJPM95VK2fd8WOid12lWmrUUQot5kmyWQhCxxwF44aL1BXQK7A/d4lRv/AOIaz9peP+ZbOsK2nm3bmyjjG9ko6scHD8lubHXAPaAfNet4VLNODH1i9eTpCELUFAQhCABCEIAFj219EaLEXutaOcmeM8sxtvG9Q7Xo4LYVHY9gsNbCYZgSL5muGj2OHB7DyP8A+HRL6mhXVuJbVZslkoFHVhwGqdgqIr9j6+kcd0BUR8iwhsgH0oyeP1SfBNGVdU3Q0tWCOPxEv9K8tdw62L7GtDUQa7liQSoD4fU/4ar/AGEv9KTlrak/3ar/AGEv9KqWhu/hJ86HuKbQ1IykK8+i6O2GQH5zpX+cz7e6yoOG7K1uIPAfHJBDf4ySQZH25iNjtS49pFh7jsdFSshjZFGA1jGhjAOTWiwC9BwzTSqTcjN1dql0QsvHtBBBAIOhB1BHYQvULWEyq4vsLTy3dDeB/G7NYz1j4D7NlXpNjsQYbNdTvHIh7mnxBbp5laWhKW6Gix5cS+Gpsj0yZrHsZXv9p9Owc/Xc4+Qbb3qVofR5EDeeaSX6Lfi2eNiXe8K6oXK9BRDtE7LU2PyNcPw2GnbkhjYwc8otfvJ4k95TpCE2kl0RQ3nuRO1seahq2jiaaW3XI4rLtmqoZAtmIvofFZHj+x1TRSufTRulpyS5oZrJHfXIWcXAciL6ce05nE9NK2CcfA1pbVB4ZMAoVbhrakf3ar/YS/0pX4fU/wCGq/2Ev9K869Dd/CafOh7k/dNqqqDRxULJW1R4U1X+wl/pS1JsxiVYbGPcM5vl0Nu6MHMT1t1VtXDrZPsQnqIJdyPo6Q4hWxUzRducSTnkImEF1+ujR3uC3JQmy2zMOHxlkd3PdYyyOtneRw6NFzZo4d5JJm16jS6fkw2+TKus5ksghCEyUghCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEAf//Z"
                        title = "OMG"
                    />
                    <SidebarRow 
                        url = "data:image/png;base64,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"
                        title = "REACT"
                    />
                </div>
            </div>
        </div>

    )
}

export default Sidebar
