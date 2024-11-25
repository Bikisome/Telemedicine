import React, { useState } from 'react';
import { 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Button, 
  Avatar, 
  Rating, 
  Select, 
  MenuItem, 
  Container,
  Grid,
  Chip,
  Paper,
  Grow,
  styled
} from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const DoctorCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  overflow: 'visible',
  borderRadius: 20,
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15), 0 6px 10px rgba(0, 0, 0, 0.08)',
  },
}));

const DoctorImage = styled('img')({
  width: 140,
  height: 140,
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: 30,
  border: '5px solid #fff',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
  },
});

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#FFD700',
  },
});

const InfoChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  fontWeight: 'bold',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

const doctors = [
  { 
    name: 'Dr. Akshay Chordla', 
    specialty: 'MBBS, MD - Psychiatry', 
    experience: 8, 
    location: 'Cure Health Center, Mumbai', 
    rating: 4.6, 
    patientStories: 1141, 
    consultationFee: 499,
    image: 'data:image/jpeg;base64,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'
  },
  { 
    name: 'Dr. Rahul Gupta', 
    specialty: 'MBBS, MD - Psychiatry', 
    experience: 9, 
    location: 'Cure Health Center, Mumbai', 
    rating: 4.7, 
    patientStories: 1299, 
    consultationFee: 499,
    image: 'data:image/jpeg;base64,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'
  },
  { 
    name: 'Dr. Priya Sharma', 
    specialty: 'MBBS, MS - Gynecology', 
    experience: 12, 
    location: 'Womens Health Clinic, Delhi', 
    rating: 4.9, 
    patientStories: 2015, 
    consultationFee: 799,
    image: 'data:image/jpeg;base64,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'
  },
  { 
    name: 'Dr. Amit Patel', 
    specialty: 'MBBS, MD - Cardiology', 
    experience: 15, 
    location: 'Heart Care Institute, Ahmedabad', 
    rating: 4.8, 
    patientStories: 1876, 
    consultationFee: 999,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvA-i6vache-k99dtI4ThSgnPJctyvMkBmiIsM1VgHyUGFIZwyXaJdo-I&s'
  },
  { 
    name: 'Dr. Sanjay Mehta', 
    specialty: 'MBBS, MS - Orthopedics', 
    experience: 20, 
    location: 'Bone & Joint Hospital, Pune', 
    rating: 4.7, 
    patientStories: 2245, 
    consultationFee: 899,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfLh2yqT16aVBNL3xMq1XR_iCDQ35sVYwt9Hsdrrm9BImqLqIyfXV1Yg&s'
  },
  { 
    name: 'Dr. Neha Reddy',
    specialty: 'MBBS, MD - Dermatology', 
    experience: 7, 
    location: 'Skin Care Clinic, Hyderabad', 
    rating: 4.5, 
    patientStories: 987, 
    consultationFee: 699,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQomDhxOgpoXEp-L1LDOThtPPy9rtGXoygUEu16uTxhCoSGU7QpWbfXIps&s'
  },
  { 
    name: 'Dr. Rajesh Kumar', 
    specialty: 'MBBS, DM - Neurology', 
    experience: 18, 
    location: 'Brain & Nerve Center, Kolkata', 
    rating: 4.9, 
    patientStories: 1654, 
    consultationFee: 1299,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsE3y0wUznN6W7lX8ILVoNNJULnP1YyeFivpkOY_l0s-WPCAW-Um4DKo0&s'
  },
  { 
    name: 'Dr. Anita Desai', 
    specialty: 'MBBS, MD - Pediatrics', 
    experience: 10, 
    location: 'Childrens Hospital, Bangalore', 
    rating: 4.6, 
    patientStories: 1432, 
    consultationFee: 599,
    image: 'data:image/jpeg;base64,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'
  },
  { 
    name: 'Dr. Vikram Singh', 
    specialty: 'MBBS, MS - General Surgery', 
    experience: 22, 
    location: 'City General Hospital, Chennai', 
    rating: 4.8, 
    patientStories: 2567, 
    consultationFee: 899,
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAsgMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAABAgADBAUG/8QAOBAAAgIBAwIFAQQJAwUAAAAAAQIAAxEEBRIhMRNBUWFxIgaBkdEUIzJCUmKhscEV4fAHQ3KCsv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACARAQACAgICAwEAAAAAAAAAAAABAgMREjEEISIyUUL/2gAMAwEAAhEDEQA/AMy09Iwpmpa5YK52PPZPBjeFNXhwhIGQVR1pmkJmOExAziuDwpr4e0HAekDN4UgqxNPCYt411O17fbq78lUHRR3Y+QgiNmuenTrzvsVF9SZzdTvmgq48Wa0YyTUMhRMP2d2jW7/qTue4WBVP7Cdwg/hUf5nc3L7E1stV+hbFtWfpsGQ4PUj2nHfyo36ejj8LcbsGiu0+tpF2lsWxD5juPn0moVzw9PjbPvT20oa0J42VY6fB/Oe+0rpqKEtrOUcZE3xZYvDlzYJxSp8KDwZs8OThNWLKKofCmrhD4cDJ4MHgzb4cnhwMXgxWom/w4Grgc3wIZu8MekMChUjhJYEjYhCrjIVl3GArArVest4yKvWW4hKrjFxmXEQAQK+M8b/1Ect/p+kGQHdrGx7AAf3nuMdJ5H7Y0Ldum1qwABLZJ9Bx6TLLOqTLbx68skQ7uz67TaHT0o1GoWpFC+ItX0DH/PSels12lXS+K9mK8Z5Ynmqfs29rHUHXag0EdED4Cj0xOrXtyXbSmm8R1QMeL5648us8renua281vy6TU6+nUUpZ4eoY12c62XJx36jr/sJd9ks/6dZU2f1V7qPjOf8AMt3PYdVpNFbcdffbVUfF8J7eYyCCME9faaNi0g01DurlkubxBn3nR4s6yOTzI3j23cYOMux0gxPReSr4xuMcLHAhKnjCqy3EKiBXw9opSaMQFYGbhJL+MMGmTjCFhxGUQjRcSESzEhWDSsDrHkAjQFxBxj4kxAGJxPtNtz6qijU1dLdM/L/1Pf8AwfuneAjY6St68q6Xx24W5Q4Wm3TU/wCn8jTZbUPpsFRHIfdntNW3VW01c7DrLKurCtr0J6/DdficbUaqvZt5s07DjpXAPTyB8vunpNFrNt4Iy6lmJGerdBPItXjMw96l+VNse4avULteprtretXQ8FsI5hcZ64J+PvmzR1mvS0oe61qP6TPfUNz1fMgjTKR3/fAOcfiBn4nRxOzxaf08/wA3L7isBiDEsxJidrzyARgIcRsQFxCBDiMsBcSYlmJMQlViSW4ggYcSDvD5wgQqYQkSCOIFeJMRiBJiAmJDGxIEZyFQFifIQIkq3HVLoNE+psVnAwqInd3PZR7kzsabaWKhrmx/IJXTpE1++MzqDpduHhVJ5G5h9bfcpCj5aVm/41rjme3itVt+o3Dm+urVNQw6onUJ7Z88evnKth2ltNqXZ+w7Az2m50VaIWXanIVBkOBnkPiYf0jb1rGoXUK6E4+jLdfTp5zzcmHJy/XqUy04xHWl+loexGSjHJFySexPp7f7xlBaoWDqmSpIOQGBww+QQRLNp3Gl2OmfTajTWE8kNqdLB657fcZq0GnTSb7uGj4/qdXWurCnsH/YfHscKfkmduOJx1isuLNEZLTLGJMTp27WuWNVhHoGmK+iykgWKQD2PkZtFolzTWYUxgOkGIwkqpiFRJiMBAmOkmI0gEhJcSR8SSRzsQgSRlhVAIZBCRAEEMGRAatGscKvVmOBO9pNIumXAA5eZ8zOPoWC3ozqCh+ls+QPTM9DXlPoc5A7E+kztLfFWNbRf1gAIwT/AEnN+zXFtrW/u19tt2T3+pzj+mJuewUUW2n/ALQZj8AZmH7M0tptg2ypxhhpaw+f4uIzKNm7W6dbkUnqyHIB85z109VRLV1qpY5bA7mdUsUPVc1+vp8zJZSTbxr6q3UH2lolEr9EnGsue7f2mXcqkTU1a2pQ2sqRkVM45q2Mg+nVR19veaNT47UvRomVLCpAtYZCHHQ485TtNXHb6XtK2ahkHi2gftv2J/ESJSO3a6rcdJ41QZMOa3RxhkZT1U+/5iaLaltqKP59/YznbbphpNy3R+bH9Iurs4kdAxrC9PuUTq95BMbeesqaqxkbuIJt3ZQLa2HmpmKbRO4cto1IiMIBGkoSESQiQJiSNJCXL844i4jCSoYQxYcwAYhjGLA37ZULhdWfNMZ9J2KXYqosB5EY6+TDvOTs2DZYjHAK/hOsqnBrfv3VhMrdunF9WPfLPB2rW5P7dZUe+en5zoLXwVEHZFAnn/tNrKm0teltFq+KQLTV3VfUfBnV2osuhrFlptP8R7kSrRvBlJpCuTWSvL08j5kSxWGe/l2jDtAiKFwqjoPKU6ccGtqAGFfkPhuv9yZaG+qUvYEu8Q54lSGwM4x1ECokfp7rjJHFh84ImkTmLqUa2+2sgWMRxV+hxjA/yZro1dNtnho+XAycCRyjeluFtbU7uuUqYDscTmTt69eelf26ziTanTly/Yw7x4gjSVBhEAjQDJJBI0lzoRDFMsoaSQQmApghMQ9IQ37S3HWAHsVnaKP3qcf+JnnNNaadRS46ZbB+DPTgZGQcTK/bqxT8XF3zQrb4WsCsGqb6lA6kHpj+0enVceNasBgYE6l1fiVsrsQGGDOLVpKKLAGUlh5sSfwmV78XRSsWdKp2dksAPbBmvJxF0xU0Jjt17ectcjHUS8e1JjTPy5EkHpM+pYU0ve7YCDOTNmFB6AYgcKwIKqw9CIIec0tV+sIttDhnOQB04g9p2tv0SaZeSkMfLHQD8/mauS4Ixj2xKhWEcvScZ/aTyMzriiJ3LW2aZjUF19nDTN79Jx5v3SwHgg7d5gnTXpw5J+QxhFhlmZxGiCPISkkMkbS5wisJAZDJZiphPaIDCTAhMUwmAwK7bPCTmevAhj+InoaRVWgepWYntjJJnn3VXVlYZVhgiWaTcrNEopat7eIwrBgCR+EreNt8Noj1L0Qe9zk6dU92bOJa9a3IUuCP904J3HcLz+p07Vj3BJ/rLks1aqTZjP8AM2JnptydrSVrTp1rTPFc4ycnuZYxBAE842/Lo6hSUay3Jz4YJ85kfftSx5iuxB/MQP6Ro5w9SyH9xpTYt69mInnE37UsMcVVvQt3hXf9wPIVpU+O/XOI1KOUO01l6H6lLD1ERdaQ44Aq/wDCw7znU7nvOoIVa9PWD++az/kyOLxaf0m97WH3KPgCWiFbX016uzxLiemAMdJTKwY2ZeI055nftZIIoOY0kMI2YsOZCRzDFzJGhzhDmIIcyVBkzBBAhPWHMQkSCSg8Vgrji4BHuJIrvwRm9BmB5HWb/fptws02lStlFhVck5/vHXfdXa9iLVWSuMdG/Od/Y9j0z0+NdShtbryK9fxmrVbHpUVmqqVWPQkCY7dkV9PLV7nul7cUppABw30tn/6nRXT621c5AJHXpidjQ6FGQPxAbP1TqV6dewAknF5LS164XqucoOmW7idaqqypC+OpOWInRfRfUWUkdZqq0iDqM5ZeuTIWiGHaNU9uoYHqn7pPrNWsGL/lQf8An4S7S6OqkqERRgnEO6Jhq38sFZNe1MsbqxRovlIJo5jgyxTKo4hKyAmDMUmRoNmCLmSSMEMEkKiJJJJKFZjKekkkBvKUag/qX+JJITHbubWirp0AHlLtSB4Y6ecMkwdzm6f6C/Hp9eJss6IceUkklBVYtVknrNdPVQT34iSSJSsVRzEq3QD9Fz6MJJIjtW/1lyRCJJJq5INGWSSATFJkkgDMMkkD/9k='
  },
  { 
    name: 'Dr. Meera Kapoor', 
    specialty: 'MBBS, MD - Endocrinology', 
    experience: 14, 
    location: 'Diabetes & Hormone Clinic, Jaipur', 
    rating: 4.7, 
    patientStories: 1765, 
    consultationFee: 799,
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA1wMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwABBAUGBwj/xAA6EAACAQMDAgQDBQYFBQAAAAABAgADBBEFEiEGMRNBUWEicZEUIzKBoQcVQmKx8DNSwdHhFiQ0coL/xAAZAQEBAAMBAAAAAAAAAAAAAAABAAIDBAX/xAAiEQEBAAMAAgIDAAMAAAAAAAAAAQIDESExBBIyQVETFCL/2gAMAwEAAhEDEQA/AMhVjVWCgjlE9F5i1WNQSlEYogUAl4hYlgQKgIYWViMUZkQ4hASysgECgEm2FLAkg4kxDxKbhTxmCIr1qVvRerXdUpqMlmOBOdfq+23fc2F5VpeVbaqqfqZxmvdT/vjVUpXKFbVGIpUyAee2SPMzMtujeodSqsbXHhH8LMSoI+U5NnyLLzF3avjTKdy8u2s9fs7uoKZV6TnsHxg/mJtMTz+p0F1Ha24d6tNfAB/CxJI/sTM6P1m/GonTtSYVA4+Ag8oR6+0y1fI+15WG7431ncXZEQSI4iAROpxlFYDLH44gERDFZYplmUyxbLIVhvTiHXmZtRYh1iGE68yRrrzJEM9BiOUQEEcogyg1hrBAhiBXCAlQsSSCMWAIYgRCTEglypViWBLkgkkIly8ZgXn3QelUKOu6k9ekjXFO5dae4Z2ruyMflPX7XhA2Rx7zxq7oa3da3qR0fxqQNwVc0W2t5DPrOq6Ns9eom7s9bvHq02ty1FmJ3hv7M8rbJ9+9e5p7cJOO6vCrAgMCcdgZ5ncKlLr+koQIagZhgYz8MzqPQOoC8es2osQ7btwdhnnvxz+szbzQs65YuLhjUoUX21HUtg5GCfXuRDCzHOU7cLnhcWcR6QSI0g+0Ez2J6eDZy8LIgERpgkRBJEWwjzFsJBjVFmO4mYwiHWIrEdeZI1lkiGSojV7QFEasDFiGDBAhAQI4UoCXJLWGIAhjtAik8pQMuVKCWDBJlZgjJAYG6TdJNE9/U0PW7piuadyvirtGewwRMC36xvX1hvsVsl9TZTTD+JhkJxkEegI/WZfWlrd1NPp32m/+XYt4qgd2X+Ifpn8pk6PUo3NKnrFmFUXKAtsO34vcAzzd+Exz69n4m254cZK9QXytRpLRq1Llm+8SnTbYqeuSMDHzjbbUa9TXH2spxakMcdssMQ+rNSXSNBdldErViFKhucHvMDpPTbtLGvf3dNhUqgMQf4V8h/frMdOMyznfTL5OeWOF43BHpmCYWZU9R4negxKIhmLPMQBoBEYRBMQU4iHEyWiXGYisVhzJGMvMkQcsMcQQIYgYsQ1ggQ1ghCEBKlyKxJKzLzArzJugkwSZIe6CTiLLYglpI0t7yt0QW95n2Om3F04yrU6Y5LuMce0L4Mlvpr9UqVk06s9upZyNgO3IUkdz8u88qtBrNhVe1sy6bTipSzwPcexn0FS02kukXVEhjuORkc+QnknW+vLYapbCz0yhUpUt3/c1twNQrjKjGPh9+c+U0bMZsx7/AB2ab/jradG9K3uuXdK/1qrUajROURvMz123tUVBSSmPDC7ds0HTuvWt/bJb0LV7W/Xar2FQYel7+6/zdvLvOtC4AHMwmM1xsudz9uQ1LS61pVdqdNmt8/CwGcD3mt79p6EwA4E195pFpdAk09j/AOZODNmOz9Vz5ae+nGGCe02t/otzaZdVNWkP4lHI+YmrM3yy+nPljcfZZgmGYJixLYRbCOMU8QQwkkbvJEGCGICwxAxcJZQljMEaDJBBliRXKzLgmSWTFsZeYtjIqLQMk8DuZTGbDp638a/V3U7KZzkeTeUxt5OnGdvG/wBD0SnQalWrYq1G59l4/wCZuBSLWx2sFcnbux6HEGz+C4annIK5H1/2I+kbSO62J/nOfbmc1trtxxknIGhSFNvAbLBgR8Xn6zxn9uTU1vtLsaCqKgo1qp47DgL/AEae0njYx7jmeT9R9O1ep/2zG1rA/YLa0pVa5/k5+H/6Jx9YdvDY9S0hVr29K+ZVFSvTVg2O4IzM5kUtnLBseRIlAhfu6YAAGOOyyJwzcwt77K0UIGwzNk92OTCgk4AkQ98+pxJCIGJxmv2v2a+YqPgqfGPn5zsxzOd6op+IqVU7UjtJ9czZqvMmrbO4uZMoiGYM6XGExLxzRLRFJaSW0kygEsKLUxg7QQhCBgCXnHaBGIUGVmBH285RMAmVmSRvnFMfeGxiHMkotOn6PpL4b1c7ajNhf5gP+ZygDVKiogJZjgADvO8tms9Mtkt7mqtJj2TzDjgkex4M1bcpJ5b9GFyy7GzqKVuLeqgwM7HHz7fr/WVZOCa9NuxqMIdK7t7hPgqKxXn6czCVxTquM/jYsPnOeWX067LPbZBTsKnuvaYdtRore3FxSphK9YIlWt5uEBCjPtk/UzKBLUwQeSQJK/3Rpn+HOPlIHYAG1cAQah8MFz2UcwVcMSPMTW1ddoUyzrb3Va2QkVLilS3U19ec5I/9QYpoOrevP3Vq66PountqepqniVl37KdBPVjgnPI495mdI9WUNc8S2rp9n1K3UGvb53Dv3VvMcj6zjOgal4151DqFGhQd765NQ3Fc7iU3HYijOfPucAYHeF09qFbVf2u4oLS8KzsnSq9vT2IR5g98ncR5+sk9bOSuAJp+pF26ZURO+9Wb2GcD+s3HIGPPy9pq+otqaRXOfidlUZ88MD/pHD3GGf41x0oy5RnW4QmKaGYLRFKYSpGMkygCsYMxSmNVvWFAhCggy4FYMuUJMyPVQGaEYBMEFjMeox8oyoRMWo0k6Do+gla8q1KiklRtBHZcjkx+p217QvWa6ruDUc7HqIHpsD5AjkfKbLpQJS0+itKl+Jd9RifxEzoKyUrin4dZAR325OBOL5GF2eHp/FzmpydmClQsymgx/Ei4NOp/Mvp/eY67rVaTCrn4D39m9f8Aebp9Iot/hOUUHIXGQDJV0halE02q5yOfh4nLhhswrsz26855I03UadSmabthwQR7zbVV8e3Kj8WMj5zU2+ghCCao3qc5A7zPqk2FBqzuNqjt6zp747XJZO8jVa1pdXV6thtva1vapU8SvSpHArgD8De3tNhfVqC2b0HwPh2imo8vb2mI2pVHQ+DSVBnPxc4mBVqGrULOWZ2HJxNWe6fpuw0Xvlo6/TdxR0Z7bQr9qNd9pzUACkqWPkMj8X9Jtf2cdMr09ppNRVa/ujuuaucknvtB9Bk/nMq3pq6I3hngHkN/zNtpTMpZMuQGz8Q7Zhq2W3lZbteMnY2v4efWcv1XWZmpIThQSQs6Vzx3H1nG9S1d98F/yrOvVP8ApwbrzFrCYJlZkxOpxdCYt4xoppApjJI8kygApjAYpTDUyRqw4sGEDBLzKzJBzAqZoDNxLcxLtJdBUaYdZ46o0w6z4zJO66VvQ+lIqv8AGG2sPMbeB+nP5ze+PsG522j+aeWaVrNTS6zuqs6tyVVtvP0M21PqOrdVRUdVcj8NJWxt+veaMsO12YbJx6ALxiN1M8L5Hzj1uDjO8Y9PSefVepLynn7h6QPmUIH6zFfqW5P+JWT25A/1h9Gf3j06neUixU1FHbkzmutuoVsVtKVCmLkMzM+1uFIxgE/mfpOPr9SPgrWrFw3ZAB8Xy9Zl9OPU1W/ZLoJStgPgpNjLn1Mxy1S/tlhs5eh/6/pqwb7KVp4wSpyM/OKuP2iaTQobqq1N7cBV5JPpOvpfYFHgX9JbWqhx4nh/A595zHXOlUrb9339vYUnNCvuqm3ph1qpjyHqODjv6TT/AK+Mbr8jKuQr9ea5+82tbRF06mKjKz31MkggZ249eJ6l+zjU7vUtBpXt5Xp1a1wzb0C7TTIOAMDuMTyLqLV7a/vdYpJZJfVr1aTWpC/4bDhjk429h5Z8s8c7vovWj07di21M29wq1S9KpbZ3DeBwQecZP6TLHVJ6YZbbl7r29sCmxxjjM4PVq3i6hVIOQDidRfagyWRdsH4M7hwMn2ycziHqGpULHznRqxcu/Lxw0GETFKYRPE3uVTNFM0NjFmUBbHMkpu8kUBYxTEKYwGIOBhgxIMZmBWTBJkyILQQHaIqNGMZj1WkiajzCrPMiq0wazQTHrP3mDVqYj67d5gVW5gzjHr6nqtvWItLq4poBwEc4+k3dvT166tadxVuq606jKMk4OOIy20YVLTxmB5GZ6LQ05KfS1qMc+GvcTU6sY57TehFNSqL6o9c8bWdsnB7/AOkzbjoSvbUjU0vULijUHZWO5foZ3Nmu6nkcjv8AKPqYwDNf28tn1jy27/6y09PvjQuqQ9VPI+s1Q6luVJp1rOtQX+Lbnbmew1dmMOob0ml1PREvRyiAemJnMmNw/jzW61qwukxdMzep8/6RFtqOmUayVUNeoynKeIobH1nR6t0Qax+7pkE+azUN0fXoMpAOe3My+0Y/WukOs19RtKa42oee2CfygoYL2n2SztlPfBH0gK024+nNt/JlAy8xAaFui1jJgMZRaCWiAsZUpjKigCGDxJJIGAwweJJJEJMEkySQRNQmYtUmSSCYdUmYVYnMkkiwax7zBqH4x+UkkwrZHounKP3Rj0JxOwq4Tp22AA5pL/SSSar7dePpm6Th6O9lBYcZmVV/HjykkmtmjKDSORLKKcA+QkkgSQoLkeQmBf0k7YlyTKCtJ1LTWnYWxQY+MD9DNChkknTr/Fw7vzMBl5MkkzalZlMZJIotjJJJIP/Z'
  },
  { 
    name: 'Dr. Arjun Nair', 
    specialty: 'MBBS, DM - Oncology', 
    experience: 16, 
    location: 'Cancer Care Institute, Kochi', 
    rating: 4.9, 
    patientStories: 1987, 
    consultationFee: 1499,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsE3y0wUznN6W7lX8ILVoNNJULnP1YyeFivpkOY_l0s-WPCAW-Um4DKo0&s'
  }
];

const ShowAllDrs = () => {
  const [sortBy, setSortBy] = useState('');

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    // Implement sorting logic here
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6 }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h3" fontWeight="bold">Top Doctors Available</Typography>
          </Grid>
          <Grid item>
            <Select
              value={sortBy}
              onChange={handleSortChange}
              displayEmpty
              variant="outlined"
              sx={{ minWidth: 150 }}
            >
              <MenuItem value="">
                <em>Sort By</em>
              </MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
              <MenuItem value="distance">Distance</MenuItem>
              <MenuItem value="experience">Experience</MenuItem>
              <MenuItem value="fee">Consultation Fee</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Box>

      {doctors.map((doctor, index) => (
        <Grow in={true} timeout={1000} key={index}>
          <DoctorCard>
            <CardContent sx={{ p: 4 }}>
              <Grid container spacing={4} alignItems="center">
                <Grid item>
                  <DoctorImage src={doctor.image} alt={doctor.name} />
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" color="primary">{doctor.name}</Typography>
                  <Typography variant="body1" color="text.secondary" gutterBottom>{doctor.specialty}</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    <InfoChip icon={<AccessibilityNewIcon />} label={`${doctor.experience} years exp.`} color="primary" variant="outlined" />
                    <InfoChip icon={<LocationOnIcon />} label={doctor.location} color="secondary" variant="outlined" />
                    <InfoChip icon={<EventNoteIcon />} label={`${doctor.patientStories} consultations`} color="success" variant="outlined" />
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <StyledRating value={doctor.rating} readOnly size="small" />
                    <Typography variant="body2" fontWeight="bold" sx={{ ml: 1 }}>{doctor.rating}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      ({doctor.patientStories} Patient Stories)
                    </Typography>
                  </Box>
                  <Button color="primary" variant="outlined" sx={{ mt: 1, borderRadius: 20 }} endIcon={<ChevronRightIcon />}>
                    View Full Profile
                  </Button>
                </Grid>
                <Grid item>
                  <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 4, mb: 3 }}>
                    <Typography variant="body1" gutterBottom>Consultation Fee</Typography>
                    <Typography variant="h4" color="primary" fontWeight="bold">₹ {doctor.consultationFee}/-</Typography>
                  </Paper>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large" 
                    fullWidth
                    sx={{ py: 1.5, borderRadius: 30 }}
                    startIcon={<LocalHospitalIcon />}
                  >
                    Consult Now
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </DoctorCard>
        </Grow>
      ))}
    </Container>
  );
};

export default ShowAllDrs;