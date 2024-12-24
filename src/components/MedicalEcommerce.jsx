import React from 'react';
import {
  Box,
  Container,
  InputBase,
  IconButton,
  Paper,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  alpha,
  styled,
  Rating,
  Badge
} from '@mui/material';
import {
  Search,
  ShoppingCart,
  LocalOffer,
  LocalHospital,
  Spa,
  Face,
  NavigateNext,
  Add,
  Favorite,
  FavoriteBorder
} from '@mui/icons-material';

// Product Data
const medicineProducts = [
  {
    id: 1,
    name: "Vitamin D3 Supplements",
    price: 299,
    originalPrice: 399,
    discount: 25,
    rating: 4.5,
    reviews: 128,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTtidxisO_QgJLmiRydBAdY_UI8Ak5WH2uY4gAW7qpr9dK4rwCeftJruWeIZijWaSZc4_rRuPcSgqghzM-i7_Jh3-CU6x_SvDoONfQ1MPTr98ZW5eeSgVHt_gz0ATJt&usqp=CAc",
    category: "Supplements",
    brand: "PATANJALI",
    description: "High-strength Vitamin D3 supplements for bone health",
    inStock: true,
    bestSeller: true
  },
  {
    id: 2,
    name: "Omega-3 Fish Oil",
    price: 499,
    originalPrice: 699,
    discount: 30,
    rating: 4.3,
    reviews: 95,
    image: "https://cdn.staticans.com/image/tr:e-sharpen-01,h-1100,w-1100,cm-pad_resize/catalog/nutrela/product/180008902/831-1731177000-1.jpg",
    category: "Supplements",
    brand: "HIMALAYA",
    description: "Pure fish oil capsules rich in EPA & DHA",
    inStock: true,
    bestSeller: false
  },
  {
    id: 3,
    name: "Sugar Free Gold ",
    price: 1299,
    originalPrice: 1499,
    discount: 15,
    rating: 4.7,
    reviews: 256,
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRBkg_p6zdfw-kq_dZOaJt-xsV4bh9I0dm5R638UqWEbmSnz1Zzsnx55-hviqkdN_iZk6AwAqsoylJluDIxOGSDjp9kyc66Lxb5unzif3UQArzeUqkg5xBBOOU1zuDwxP5CIF-Txyulvg&usqp=CAc",
    category: "Devices",
    brand: "ZYDUS",
    description: "Digital glucose monitoring system",
    inStock: true,
    bestSeller: true
  },
  {
    id: 4,
    name: "Omnigel",
    price: 799,
    originalPrice: 999,
    discount: 20,
    rating: 4.4,
    reviews: 167,
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExMVFhUXGBgWFxcXFxsXGBcVGBYdGB0aFhgYHiggGB8lGxUWITEiJSkrLi4uGB8zODMtNyguLisBCgoKDg0OGxAQGy0mICUtLSstLTAtLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABAECAwUGB//EAEgQAAEDAgMEBgUHCgUEAwAAAAEAAhEDIQQSMQUGQVETIjJhcYEHkaGxwRQjQlJy0fAVQ2KCkqKywtLxFiQ0RFMzc8PhF2OT/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA7EQACAQIDBQQJAwIGAwAAAAAAAQIDEQQSIQUTMUFRMmGBkQYUIkJxobHh8BXB0TM0I0NSgpLxFlNi/9oADAMBAAIRAxEAPwD3FAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAJQFJQFlWs1olzg0cyYHrKi6JUXLRK5pMfvjgqWtZrjyYC/2jqjzKzlWhHmd1LZmKqcIPx0Odr+kynna2nRcQXAFzjEAmCcombd6y9aV7JHpR9HaqpuU5LRXsjpMdi6oDSHRJIMAWgSPcV2JI+eJGxaznF2Yz+B95UNA2qgBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQFJQEfFY6lTE1KjGD9JwHvUOSXEvClOfZTZpsTvphW2YX1TyptJ9pgLN14I76eysRLirfFmoxm+1Y/9PDtYPrVX/wArfvWTxPRHZS2PH3pt/Bfuc3tHfHEO1xB+zRaGD9q59qxlXm+Z6lDY9Fa5L/H8RzmMxz3wXZjOjnkvd5Oesm5PierSoU4aRt4WX0Iuutyq2OjhwKspdZEtSsn7J7W6n0lKm7nld+02P5l7EXofm1VWm13sk7Jw+QnvRmZtVACAIAgCAIAgCAIAgCAIAgCAIDHVrNb2nAeJA96MlRk+CNZi95sJTnNWZbWL+5Uc4o6YYKvPhE11XfSkf+lSq1O8Nyt/aKpvonQtmyXbkl8/oa3E714t3Yp0qf23ZiB5fcqOszohgcOuLb+Gn3NJjtsVTPTYt0fVpwz3a8OCylVb4s7qWGjf/DpeLNJX2tQbOWmXu5vM3/WlZOcT0IYTFPi0vhoZfl2JfQfWYGNpsJBgy60XAjkQUytq6JVOhTqqlU1k/IridlBr6L61V1Sk8S53ZDSRLQTNgSQJtor7uzVyI4tuM404qMlwKfIWU+lYWS10ljyMxDS0CA76Ja7hae9TlSTRDrzm4yvquKIVduYNokfOOIe0i7YgsIJmzerIsIvKpLVJG1N7tyq+6tH17vznyNblIJBsRY+KyPRTTin11MjFZFW0ez7vYgOwVBx/42z+qI+C9On2V8D89x0cuJmu9myw9UZoV2cpNUAIAgCAIAgCAIAgI+Ix1JnbqNb4kBQ2kXhTnPsps1uI3pwjNazfKVVzR0RwNeXukGpvtQ+gyq/wbb1qHURqtm1PekkQq++VY2p4V3i4/eQq742js2HvT8iHW3kxzv8Ahpjxk/FU3zN44GguTZrMRtasZ6XGGOIZaO+Z+CzdVnVDCxT9mmvE02I2nhATnrPeZvLjqL/Rg8FXM2bKnNaXUSM/eehTnoaUuDc4NpI7nG89X2KMzZZ4dO+aV9LmsxG+VR8xbX1Sb37hOiOEuohPDRTywbNa7bNd8Al2oJgnSZiBaYBCOC6mtPEzbSjT5rkYnGqTEGASTpczIgnQQPbHNV9g6H6zdRS4PX86E5YHrG/3Rq1m1mhoeaTpzwOr2SJJNrGOK3otp9x5e1I0pU7trMuHU7RmHa2Q1rWg3EcSReRYcBprJ5Lssj57PJ6tkDF0bOGk69Uc/ozPjoeHlSSOmEpNpnO4upmrNLc/VBpuyiWsBBAY1xAjUX1F7mFg37R6VOFqLTa11V+LfVmvxNUPdmAiwGkaCNB3R6llJ3dzuoQlTp5W7loClGiPS90604JjeWZv7x+9ejR7CPiNrwy4uXfY3WCq9dpPH3arZnmG9VAEAQBAEAQBAEBgxh6sc1DCOX3uw9NuH6VzZ6Mg+TiG8O8hY1kst2epsqU9/ki+0cG7eCi0yyk0HmGge1ce86H0y2bKXaZDxm89UtOQAGDE84tZQp6mj2bGEW1q0tDR1dtY18y4t1iI4nmeABHC8K7cVzOSNCvJWy26GI1K75z1CbRrF5BGlufDiquUTppYWrJPP0sYBgnEy58+U+8o6q5ImGzql7yn+eZVuAbxJ8JtqD48Ajqs0hsyn73kSfkYEOymwjMZ0PM6HVUvKxvChQUklbMlbibLC7v4h92UHGeIb+OQ9SsoTlyMpYrBUuaJP+H6rGdNUbFIODXFrusJ5CDpMqd1JK7K/qNKct3S7T4X4EDGtp5h0WbLAnNE5pM6cNPUsna+h14d1cr3tr35GDKoN7m23fotq1BTrVslFoLi1z8rXfoiTAmZ8AVtSV3Zs87Ht04OdOF5PS9r27z0PCY7Dva/oXCp0TZLaYkxFsgsHacF2pxfBny86NaDWdWzPi9EWvZTe6mAJFRhfTfPVc/XK4cDF/AHkodmyU5pSfR2a5/E0mJwzA1lQNeMxd0jRUcXdO28OLiZkscO+BzWbStdHdCc23HjZaaLs/jRyVajkcW8iR4xxXM1Znv055oJ9xRoRFuB6HuKZwzh9V59zT8Su/D9k+P25G2IT7josNTgjugfBdDPFN6FQBAEAQBAYcRiGsEuc1o5uIA9ZUNpcSVFy0ir/A1eI3owjPzzXHlTBqH9wFVc49TqhgMRPhG3x0+pq8Vvu0T0dCo7veW0x7yfYqOt0R2U9j1H2pJfMrsrbzsTTD3BrTcENMgEHmR9Ut9amE8yuc+Mwfq9TInfmNuDpMLXp86bo8QCR7QFaavBmeDnu8TCXejxoFeTwP0jidBs/dDEVWB/VaHdkOMF3kVvHDylqeTW2zQpTy2btxJOzNzKlRlQudleyRkjUiYjxgq8cNdMwr7cjTnFRV0+ZOpbm020KdV7nFxjO2bCxmCNbgQrrDpRTZyz21VlVlCKVtbM3FDcfDsrRlL6bmxBM5HgTJOtx+Oeiw8FI4Z7Zrzp6uzT80YmbEovw1IljW/OgPIEWmfuTdrKifXKsa8rS93Q2+KwTqjqmHaKbWBoyh1IutFyCCIMkan13V3H3Tjp1VFRqttu/Uz7KpThqWUOMZmwHZRGY6k+A9atHsmeId60m7a9xrvkbX4WtQqVWNJqOILiIAJjhrEHTuWeVOLTZ1RqyjXjVhFvQ8+2zgWUqhYx4qNA7Q4m645xUXZan1eDrzrU8842fQghqix1Nl4YFNiuYm7JxTqNVj2ODXAgSezBN80cOavB2ZzYqkq1KUZK+n5bvOgxG3KEVGsc/KaofTAbem7Vz2zaCSYb3nSVrKpGx5UcDWdm0r5bPvXR96XMiYveFji8imes/OQXQAREEQLEwJWbrLobw2dUVryWiNHjMWajy4xJjTuEfBZSnd3PSo0VTgoopSdKF5I9C9G5BZWb+k0+tpHwXZhuB8pt5e3B9zOqY6PX8V1HgG1ZoFUFUAQBAEBw/pQxBp06BsQajrESJDCRbyKwruyue7sKmp1Jru/c87rbYqkRmIHIW9y43Nn1EcLTjrYhuxBOpVG2bqEVwOw3ArdWq3k9p/abH/jXXhndNHzXpBC04SXRnY0BMgrrXA+bvZ3PH69MNcRAsSI8DC8qSs2fpFOTlBO/FL6HotCrQxFPDVBXbT6GMzTY2EaLuupKLvwPkpQrYedSDg3m5lo3pw+au4VA2XMyHnkgzAvHh3qN9G7D2XiFGHs36kbaG+GFLXsbmynIGgNjKGeKrLEQNqWx8TFpyS8bakKp6QYrdJTp2LYc1x1I0Mjz9amNWcn7MWy8tk0Y07VqsU79TVYneevUpGk2nlaTm0JIPMGByV9ziZq0YW+JXfbLoTzzrp8tNfoZRtradRjQC+OBETa17nmtVg8S9G0vH+DkntbYkG5QUpeH/Rg+Q410B9TKCeLoAtNwIiwWsdmTavKflc56vpVg6btToebX3KfkQTNbEN43kOIiPrH8QtFsuktZNv46HK/TDEy0pUorzf0sXOwmDa0zVLjwABjzj4LWOHwlN6peLuc72nt7FL/CUtekbLzZHbXot7LSe/L/AFXWvreBpdleSMJbE9IcVpVk4/Gf8GLa2NpvdnaMsgZpIu4WkRzELw8VVhUqZoKx95sfDVsHhlSxEk2uabfhqa84pvPgSO8D+y5j1N7HqY24kEwAfGLKJJinWjJ2SZnFRZmzjqWFym5ZBr0zBq53foyxXXqt/RafUSPiuzCSvdHy/pFTtGD7zrq1SCfH4BdyPljf4Z0tB7lQGVAEAQBAcT6V8MXYWm4fQrNJ8HMe33uasMQrxPZ2FUy4lrqv3TPMnbMqcYHiQFxZD63fw6/ItGAPFzf2gmXvJ3qOk3DblfXbI/Ncf+4ujD6No8Pb2sIP4/sd7QaJXYj5WSPI8bTzYqoyQ0dNUE8gHuufUuOhQ31dwfefbY3HywWzo14q7tHTXnZcuhkds+g09bEA69mJ7rEWuvU/TsLHtP5nyP8A5NtWt/Spf8YSf1MjMPhA4XqVddA4TroByiUyYCHC1/FsOv6RVuUkv9sPqBXwvZp4dznEGCYJ0N4Gv/pWWNw0dIrySInsPbFWN6tSy75t/JaF1XaxYSPk9NhnQtuOMZSLWIWctrQWii/zwNaXodUqLNOsvCN/3MJ27WAgOAEAWboByWM9rTbuor6no0vQvDxX+JVm/JfsQXbdrEO674sYENmTfRYy2jXlzt4G9P0c2bBN7ty+LZhONe7XN4l5M25HvWUsXWfGbPRo7JwUH7GHgvBfujE2o+/ZB4d3jz4rB1Gzup0XBaKK+BTO/i/1AclXN3E5JvWU/Io4i8uN446Qicg40le8iwOpgRb42T2iqlh1pcfK6Y0I8gmWTJeKw8eBjdtNnNTumzKW0qXIpUx8GAPjwlN0RPaFtEij8W76N03cSssbUv7KM1GqeP4v9yhxSN6WIl7x1/o2rxiyOBpO9jmlbYXSfgeZt6WbDJ9GvoehbQJBdHEAjuJB+5eifHkb0Tbbq4vZ1OpXeHVQ6q15gN7NQxYACzYHkqA7JAEAQFCYQEPaWHpV6bqVSC1wgiY9RGh71DSaszSlUnSmpw4o59m5Wyx+anxrVD/OstzDoehLa+OfGfyX8GYbqbMH+3Z63H3lW3UOhT9Uxv8A7GZXbLwlNjm0KbabjEZWkXExPrPrVlFLgYVMTWqtOpJs0VHasEg2IsrRM6keh5zicQx+IqF56hqPJPcXE8Aea819t3PvISUcLFLjZGd+08G2JpF0NABu28DtAOA1z87QrvK+Rx56699L8+BY/eqkOjAps6kw12Q66XDZ1g2hWzOy0Mcsdb1OPeRcdvQ57S2Q1sgwDGgI85mfJUleXFGtONGk8z1feamrthpMueCTqS6SfFV3bN/X4xVo6F7a73dlj3eDHH3BTun0M3tFdUZWYfEu0oVv/wA3D3hWVF9DGW0Y/wCoyfkjGnTD1PMsb/E5WVCXQwltKK5mVm7ePP5oDxqN+Eqyw7MntNGdu5+NOopDxqH4NU7hhbRj3l53DxbtXUR+u8931FMaL7jGpj4yVtS9vo5r8arP3j93NX3XeYLFRvpFmRno6qjWswfqn+ruHqUbvvLrErlBlf8AAhHaxVEfq/e9VdOPNmirzfCm/J/wU/wdRGuPpDwDf6kyw6mieJfCmzO3djBDtY8HwbPulUtT/wBRvF4u39J/QyDYezhrjKp+zTP9Kq1T6msfXXwprzJ2xxs/DVOkbWxLzBbGRoEGD3clenOnB31ZlicLjsTT3coxS+L+5u3b74Ufm67iBFwwWEx9PvK09bj0Zxx9H674yXz/AINfszerDYZgp4bDPptBJAzjVxkkm8yVR4pdDaPo9Ndqa+Z6LuztY4qiKpblMkRM6LenLNG54mMw3q9V073NsrnKEBrtvmKLj4e8Ks3ZHRhUnVVzQYDaQf1XRm/i8O9UhUT0Z1YnCOHtQ4B7SwktcGzwMfHRXsuTMlKUlZxbMf5QA7VWn5uaPimZLiyfV5y7MH5Fj9r0eNal+2D7lG8j1LrBV3wg/I0W0H4Zzy8YlrZFwA50nyUOrBczeGz8S7ewzka+xcGe1iqh+ywifW1c16a1ues8PjJxy5V8v5MX5D2fxfXd5AfAK29p95mtnYp8WvkZ6eD2e381Ud9ptM++VG/j0L/pNfnJLzJVPE4RnYwo9VMe5qesLoStiyfGX1/kkM2+G9igB+v9wT1nuLfokOc/kVdvRU4Mb6yVHrMuhotiUeDk/Ixu3lr8qY8nf1KvrMzRbFw66mGpvHXsMzBOlhfwlN9UZb9LwceP1LTt3EET0sDTstF5jlzVd5ULeoYNK+X5mL8uVi0P6Z8EAiDFjpYQmeb0uNxhFDOoqxY/az+OIdf/AOw+HNLz6s0y4WPKPkiO/aAIOaqbagvmPG55hQ1IsqtBdF5FxpBUOlNcimQITctIUFrmQUH5c+V2TTNByz46JZ8TPeQzZbq/QuqUHNEmNQCMwJBIJAcAZbYHXkVLi0RCtGTtH6MshVNAgLmi6lEM9e9Hg/yY+274L0KHYPhtsf3TOnWx5gQEDbh+Zd4t/iCrPgb4b+ojzfeQBoqgGQBrEcBw4XXDV4n1GAvJRbOGc4CJ4kDzOk+dvNYJNnvVJxha/wABTxTfDTgTrETAsSSBCtkZzet07al9PHtJgHWIgHQtabyLdoKcjtcr6zTcsvUx1cWYBg3c5sC8kPyC5iLwpUCHilGKbXUxMxgdEA3g8AcpAM+32FTu2Fjk7JJl9HFFxYAIkgm4PVLXEaDuB7rKclkZ+tynOKStqY61d0G+odIFshDsoFr89fqqygjCpiKlr9b/AFsZsU4y3IT2XRFwXhzAAf3te/kqpJcTWtUk8uVvg/MxO6UggNMgy0ZTB5HN4yI7gbcbWiZOddxtZ6A0apObraATADsuZ/AxB7E93qUeyTatJ5vDwKvw9fgT9K5cIEiBbiFF4jLib8zJXwbnACI6r2GXEluYtgzxgD3KFJI2nRnKKXc/mUOzySSS0yQQTJ0qB+WNNG69585U0Z+qz95otobLiBOjbkAQXZWgW52ef103gjhNWr/mlvKxfT2YCO3M8QP0XN5n6/sR1WTHBq3H5GUbObM5nTMyItZo5cm+0qu8ZosJFa3d/A6XdDZVPEVujquMBpcADBcZ0nuB4clenFSlqc+0MTVw9FSh14m52PsGjTr1qVdkkn5nP9Nl7s4F0RMXHcrwpJNpnBicfVnThOnLlrbk+8v2PsjLSq4Wo3LUIf1i0lrmkABwdEGCRaxCmMbRsVxOKzVI14vTpzT5r7ltLZL3YY4eo0scBkzatdlIcHN5gwJ0NymXkT6zFVt7HXW/fryNJi6Jk4Z7DnfUbU6pDgyq4OFgGy4OBaderJsjV1lO6jKy9Yi9Erd7XHrbTgtNTSYmg6m4sdqDBvI8iLEd65JJxdmerSqRqRU48GY5UGhlpBSikj1z0ff6Qfbd8F6NDsHxG1/7pnTLY8wIDW7wn5h3i3+IKlTsnThEnVV+/wCh59vbcVT1bk6T9Vp48LrjrH0ezHZxRwVWkHNLTof7rmUran0VWmqkcrLamGBzRq4j2EG1u5XVTU5KmETTy8y/omMBe7gJJ8ABoO5o9SnNfRFdxCmt5Lii5nQyRydxJIzEh9pPMg24wre0UToXa7yzD16BjqgRlLZbwyAgi1oDo/ujUikKlBvgr6fQyU67RkhjRLngcIh0QLam5i0wUy8SyqRWVpfn8lG7RBdYWMcLlxLmxMxq0etMjKLExzcPzUPx0EANi/WBjiwuGnM8p0OqZSZYnK0rc9SlHaBcQMouRF4gFrDfmZqadyOKLQxMm0upWniszqrZ0nKLWgQT+1Pq7wmWyQjWcpzin8PAw0MRVm4+o3QxIzhxEfWLR7FNomUa1a9vgWuNV0TmGmje+m6bjhL/AFJ7Ie+l1/GjNSFQuYXgwDJ0EdR4t62z3qG420NIKtKSzFtOhUAAiIjMQQC4jNJnlJBvzKOSIVKpa1vuTMOCGgcgqN3Z104uMUmZlBYn7N2dXeWOp0nvGYQQDlJBuM2g8VpGMm7pHJicRSipQnJJ24HrFd5IBGWx60yYEGYI4j4Fd1z4xKzsRqtawIMtMcJuSIMjQa30uFQ1SdyDi6pzNMuy9a0Ng6CJjNI1EQNZUORtTi9epxuPx7Ris/TNeYcHOIBgZdG5GwH6tEaEa3Vc3tHtUqMnhXFwa10tz+3XuNTttzS5oEZmgtdlmCRcm4t1i8QLQ1q56zR3YBSjF34PVGuCxO5sy0lKKtnr3o//ANIPtu+C9Gh2D4na/wDdM6VbHmBAafew/wCWd9pn8YWdXsnZgf6y+D+hwu9jjlfM9p1yQT2RrFj4jguOse/sxLMvgvqcG5cx9OAUKtlXiQRzUp2ZnUgpxcWYaOCDSCCbeHdz+yLrR1O444YKEXxYGBbAEk6AzyGXlH/G32qN4y3qcdNfz8RK6FpEGYknU6l2a/O91XO73LyoRasGYSmBGXuuSeZ4n9Iqd4yqwtNcEXCiy4IBHIgEAREAco96ZiyoRsZGMHADyHdHusl2xaEehIbh3nRjj4NJ+CnKyHUprjJeZlq4F7WdJbLIFjcEgESPAhQ1ZXKQxMJTyJMhkqp0lajSNQRIBE2kHQjuR6FYzjLgwyk4hzgJDYzHlMx7j6ipUW9RKpGMlFvV8ChbABkEHSCDpqDGh7jzCNNBVE20+KM1DCvdOVpMXOgte8HwPqTK2UlXpx4v9yZsOnVrvbh2VHNa4kuAccoAEk5ZglXp3k8tzmxrpUYOs4pv4HpeEwzMPTbSpNgXganmSeZXZ2VZHys5yqyc5siYjEjrdZuRk54cJBAk5wDIjkqyZrCGi01fA0O0H5mCajT0sMacpeHZ2GGlpixBtcQQPBZ3tqdtOLv7MbZdXrbgc/SwRpuaxopPyFjnPcwMeGF2YvBNUyWluSI42BlIvojtq1XJOcm1fSyd1fpw4czRgHiuU9i10mi4OQnKVa9Lho9h9Hh/yY+274L0qHYPiNsf3TOmWx5gQGl3vMYZ32mfxhZ1eydmA/rL4P6HA72mOknXO/mODeBuOa46x9FszW3wX1OGLlzn0LOo3f3PqYin0z3tpU+BdafM6cOeq3p4dyV2eJjdrxozyQV2TW7jvbiW0Xv6jmkte217WvM2n1cLTb1b2rMwe3L0c8VqnwJ1DcFvyk0nPdkDA7NaSSfK2g8ZV1hlmsYS25UdHMkr3JeA3Jw73VWdaadgZNzLhcT+iParLDwu0YVNs4mKjK+jI9XdqjSw2ctmo2pkdOkhpOnkNLeSbmMYhbSr1Kts2nE2OP3SoHF0qbWhtPKXO0uZMT3dX8aK0qMXJGNPaddUZNy14FNo4WhUo1AzBuytzBr2FsDKLl2cjLb6snXzmUU1axWhXq06ik6mr5O+ptNlYZjMNSOWhmu0uqAXguFjzsPIK8UspzV5ydWWr8DBsxwccZLAMoMWt2JzNtYGVC1ui9VZVTszy/FUXtJLmOaJIktI9/gvNlGSd2fZ0KlOSSi03Yv2UGGoBULcpscxi3MEkAHz5wCYCmlbNqUxjnGnene/cbZ20MMGtGWmRlMEUGOdmNBhBLHuIHzpfadRC3dSC0PNjh8VKTs5XuveaXF/tYu/LdJhqhkN678pFOmG5C2s1mUMpgjtUbuJOvIzG9jqHs+tNRzdFfV//PG7+PAoN5gKbWg1C4XMue2SZscj9AIaIjXNEhN+ktCXsubqNuyXLgafau0XVn5yT2GNIkwC1gBiSbSCfNY1J5nc9LC4RUYZGubIbKhaZaSCOIMEeYVFodUoRkrSV0ZsNjqlOo2q1xztMgkz5GdQRI81ZTadzKphqc6bptaM7N+0G9TG02/NVfmsSzXK/Rro+lExPEELozLtrnxPn9xJZsNN+1HWL7ua/joRqmEd8/hINh0lA8AC4lrZ4ZX2B5TwCi3FGqqReSvfi7SXyfmjXY6ia1Nj3NIDgWVJEZWv+kZ0a17M47iOajU2jOMHKOZaWa8Ps7Gl2u4U3kvc2+U5pIBc5oJjMAe1m1AVKkXmaR24fEU40FKbty10IhrN5j+3vVMsuh0esUrXzIMrNJgOBMTE3jnGvEKHFriTTrU6jtF3Z7P6O/8ARt+074L0sP8A00fF7Z/u2dOtjywgNHvkQMK6frM/jCyq9k7dn610u5/Q813pruz1Wn6xdwm7RrGtoXDWlq0fVbOprdxl3fuciVkj1WeqYVrMbs6nSp1W03AgmXZYhxdA8Jj1r0FadOyZ8ZNzwuLlKcbmwq7XojFYekHg9EwlzvoxDW6+Mes8lfMsyRzrDVHSlUtxegdtikAC6owP6WC6f9u2sajf3SBGtymdLmQsNUb0i7W6c7EI7xYUfKvnm/OghmV0GZfyMt7QKo6sLvU6FgMRJQtB6cdCJtHfGhXwzGuJbUsXWJE5SOHiOCrLEQa4m9LZOIp1rpaGLam/LDiKVakCWtaWuaQQePOOZ4qs8Qrpo1o7FqbuUajS6FuI35wwFQU6Lm9I0h5mbkEWkjLEmwCvveUYszWyp6Z6kdO+xFZ6QGsptp9Cx4aSRng3JJ5/pEK0d9aypsTwNDM5SrxXiR6O/wA9rnGnSYC+AQLjkA1ob+JV9ziuKgUlS2eklKunbp/2avbu81XFQ2o27bgBpBGuogc+STwOKqLWK80b4XHbNwknKM2/BmkfiADBDgeIIg+1I7HxD5o6ZekuDXDN5fclYCias5SAYsDqY4K09j1YRvdGMfSnDSqKGVq746GJeOz6i/MIQVhAVDVIuVDChFyc3aVcCmA+BS7ADWgC0TEQ43NzJVs8jleFoNybXHjx/F4FjsXWIc01HEPOZ19T3/cmaXUtuKKaeVaaFH4iqTmNR0xE5jMfiFF5XvcKlRSy5V5Eetsp9UgtzyJghubUQbQrwzRvpc5sSqc7NzUWn3fvoVp7m1nOkUa5HLozrPPL4aLdTqW7J508PhM+aVVW+KNlgtxsS12ZuHq6R1oAgkE6xxCrKNWa1RelXwGHnnjPXz/Y9W3NwL6GGDKjcrsxMSDrHJdlGLjCzPn9o1oVsQ5w4G9WhwhAQNubOGIoupTlnQ8iDIkcRIVJwzqxvh67oVFUXI8W23h6lF76dUEPGveOBB4g815c4uDsz7nC1YVoKcOH7mjpguexgiXvawTYAuMAk8rrrwmGVebi3bS5z7TxzwdJVEr62JVGhVYQemZTY76bXuMtyucHQ0jMIZz1cBrIHqLZdNLRyb8j5ufpHVn/AJcfqUqYOGlzsRROhDQczzJGomxgk6nTvV1syh0kUfpFjLWiorwMz8Jhw4/5vq8CKZJFhcwL3J0HnrErA4eK1h5so9tbQn2ZeSLejw/WGeu7sw4CJ6pJOUi3WygA8JVlQwsdbR8ynre0585+C+xd0dAFpDcQ+HdYOIDS2DYQAZnLfxsm8wsecF4Ebnak/wDW/GxdUbQIAFB4JFzn7JM9mTcC2usHmnrtCPvL/iP0naE+1F+MvuZWFhY0DCsLw0NzTqQIzENF3SSb+3hR7RpJ3Tl5E/oWK97KviyS3D4guY6lhGtLHZmltJ7jPWi4AsC6Y0loUPaUHykyVsOXvVYLxJdPZW0HABuGLAC0jLRczsmRqf8A37Vm9oX9x+LLrZOHj2q8fBfcls2BtZ0w14n/ALTfIAm2g05BU9dqPhTXmWWAwC7Vd+C+xZ/8d42oczwJMSXVG8BA7IPABW9exVrRUUHhdlrjKb+ROwXo4xTDIfSaftOP8qpLF4uXNDJspO+7k/Elj0a1XEl1dgJMmGE3PmFwPCuTu2erHb9OEVGFN2WnEkUvRm36WIJ8KYHvcpWEXUpL0inygvMlU/Rth+NWqfDIPe0qywkOrMHt+u+EUS6Xo/wY16V3i8fygKyw1MyltvFPml4fySqe5OCH5onxe/8AqVtxT6GMtrYuXv8AyRKZuvgx/t6fmJ96tuodEYvaGKfGb8yTS2Nh29mhSHhTb9ysoRXIyeJrPjN+bJNPDMb2WtHgAFNkZucnxbMykqEAQBAEAQFCEBoN7d2WY2mBOWo3sPifFruYPs9+VWkqi1O/AY+eEm2tYvivzmcg30UF3bxLY5CiT7S8e5UpU6lN3hKx6GI2zSrxyzpXXe/sTKPoooDtVnnwY0e+Vs3VfGpI41j6UezQh5E2j6MsGNXVT5tHuaqOlfjJ+bJ/VZrswgv9pNpej/Aj6Dz41HfAhRuIc/qw9sYrk0vBfwS6e52BbpQb5lx95U7in0MpbUxb/wAxkqnu5hG6Yaj502n3hSqUFyMnjcS+NSXmyVT2dRb2aVMeDGj3BWUUuRi61R8ZPzJDWAaCFYzbbKwhFhCEgBCCqEhAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEB/9k=",
    category: "Emergency",
    brand: "CIPLA",
    description: "Complete emergency first aid kit",
    inStock: true,
    bestSeller: false
  }
];

const beautyProducts = [
  {
    id: 5,
    name: "Vitamin C Serum",
    price: 599,
    originalPrice: 899,
    discount: 33,
    rating: 4.6,
    reviews: 345,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVoUx4frcypiilo4mzqTk4mAJq545xV-BMTaTDEcrIlYzp6opH1Q7ehBsoneVVUXDapge2GennRtPwA8uCdZaugj2XX5Jkk3h7cNQb525So8U2ptDzJnUo1GQ",
    category: "Skincare",
    brand: "HIMALAYA",
    description: "Brightening & anti-aging serum",
    inStock: true,
    bestSeller: true
  },
  {
    id: 6,
    name: "Retinol Cream",
    price: 799,
    originalPrice: 1299,
    discount: 38,
    rating: 4.4,
    reviews: 212,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRvR8WHSmPKFGpUumwKJivZDsjox-tUREeLs_lRqRPrBJ21Dn4sIeHeSxvlPBawrTz5QwZRlxIuzQC7omlKYPoXo__wMRdNrUCZxGd4bMeW_MfCy7LCHeG0HTu2Tiw5fgdGbVROO_Q&usqp=CAc",
    category: "Skincare",
    brand: "SUN",
    description: "Night repair cream with retinol",
    inStock: true,
    bestSeller: false
  },
  {
    id: 7,
    name: "Hyaluronic Acid",
    price: 449,
    originalPrice: 699,
    discount: 35,
    rating: 4.3,
    reviews: 178,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTzaJ0pzeYyAvUkGaLPoTXNpwyHpZ5ASnIMexREb1AYeEp4y1yWn2fMlscpoP5f2rD0_cxFRLgQbCQ6-aeRMSDjk-pLVQ9btHWcwV-TkDZZGYNlCfPRB-eLsA_d9tfSW4J2ibvS1oo&usqp=CAc",
    category: "Skincare",
    brand: "LUPIN",
    description: "Hydrating face serum",
    inStock: false,
    bestSeller: false
  },
  {
    id: 8,
    name: "Collagen Peptides",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    rating: 4.7,
    reviews: 289,
    image: "data:image/webp;base64,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",
    category: "Supplements",
    brand: "PATANJALI",
    description: "Anti-aging collagen supplement",
    inStock: true,
    bestSeller: true
  }
];

const wellnessProducts = [
  {
    id: 9,
    name: "Yoga Mat",
    price: 999,
    originalPrice: 1299,
    discount: 23,
    rating: 4.5,
    reviews: 156,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTQ34b6oatsrsMe0RuJsxbs8kt1RY6NUHUZHYVdUJF-w9kkPofGDFuwuN63smd21odW9SodLpiXtvKv7s3XHAS4bvL5_9q-k9GoQTW-kw0qb9qYjrodCLONag",
    category: "Fitness",
    brand: "PATANJALI",
    description: "Premium anti-slip yoga mat",
    inStock: true,
    bestSeller: true
  },
  {
    id: 10,
    name: "Herbal Tea Set",
    price: 399,
    originalPrice: 599,
    discount: 33,
    rating: 4.2,
    reviews: 98,
    image: "data:image/webp;base64,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",
    category: "Wellness",
    brand: "HIMALAYA",
    description: "Assorted herbal tea collection",
    inStock: true,
    bestSeller: false
  },
  {
    id: 11,
    name: "Essential Oils Kit",
    price: 799,
    originalPrice: 999,
    discount: 20,
    rating: 4.6,
    reviews: 234,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ2lJdArVRZyIsPHu7z4w42tLV67SxTLXem6sHhhMj4XqvBJK_2S5gl4OIwpH6JF_O4Ie6S_u30UJWWOPaiEj6Vdp1gzEBnztUjmI6ut-4jcJc99iqMGV1qqD6N_OOVCFaBmjt7csoivoY&usqp=CAc",
    category: "Aromatherapy",
    brand: "ZYDUS",
    description: "Pure essential oils collection",
    inStock: true,
    bestSeller: true
  },
  {
    id: 12,
    name: "Meditation Cushion",
    price: 599,
    originalPrice: 799,
    discount: 25,
    rating: 4.3,
    reviews: 145,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTtl_NvvsJy_tOrCJgOXxrit8-1vA-ohIDfT7SzxN6A7dltUvanT6Mi6dPBinuY0gtPAUloBS5UO-1YDFv5--QmxFfhibSiX6xNu3yVFBup7i6bdpjY32oa&usqp=CAc",
    category: "Wellness",
    brand: "PATANJALI",
    description: "Comfortable meditation cushion",
    inStock: true,
    bestSeller: false
  }
];

// Styled Components
const SearchWrapper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: 700,
  borderRadius: 50,
  padding: '4px 16px',
  marginRight: theme.spacing(2),
  boxShadow: 'none',
  border: `1px solid ${theme.palette.grey[300]}`,
  '&:hover': {
    border: `1px solid ${theme.palette.primary.main}`,
  }
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  borderRadius: 50,
  padding: '20px 10px',
  '& .MuiChip-icon': {
    fontSize: 20,
  },
  '&.MuiChip-clickable:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '& .MuiChip-icon': {
      color: 'white',
    }
  }
}));

const BrandCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  borderRadius: 16,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  border: `1px solid ${theme.palette.grey[200]}`,
  minWidth: 120,
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
    borderColor: theme.palette.primary.main,
  }
}));

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: 16,
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'visible',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  }
}));

const AddToCartButton = styled(Button)(({ theme }) => ({
  borderRadius: 50,
  textTransform: 'none',
  padding: '8px 24px',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  }
}));

const DiscountBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.error.main,
    color: 'white',
    fontSize: '0.875rem',
    height: '24px',
    minWidth: '48px',
    padding: '0 8px',
    borderRadius: '12px',
  }
}));

const MedicalEcommerce = () => {
  const brands = [
    { name: 'PATANJALI', color: '#4CAF50' },
    { name: 'HIMALAYA', color: '#2196F3' },
    { name: 'SUN', color: '#FF9800' },
    { name: 'ZYDUS', color: '#9C27B0' },
    { name: 'CIPLA', color: '#F44336' },
    { name: 'LUPIN', color: '#3F51B5' }
  ];

  const ProductItem = ({ product }) => (
    <ProductCard elevation={1}>
      <Box sx={{ position: 'relative' }}>
        {product.bestSeller && (
          <Chip
            label="Best Seller"
            color="primary"
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              zIndex: 1
            }}
          />
        )}
        <IconButton
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            bgcolor: 'white',
            '&:hover': { bgcolor: 'primary.light' }
          }}
        >
          <FavoriteBorder />
        </IconButton>
        <DiscountBadge
          badgeContent={`-${product.discount}%`}
          sx={{
            position: 'absolute',
            bottom: 12,
            right: 12
          }}
        >
          <Box />
        </DiscountBadge>
        <Box sx={{ 
          height: 200, 
          bgcolor: alpha('#2196F3', 0.1),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              maxWidth: '80%',
              maxHeight: '80%',
              objectFit: 'contain'
            }}
          />
        </Box>
      </Box>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {product.brand}
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          {product.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={product.rating} precision={0.5} size="small" readOnly />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({product.reviews})
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            ₹{product.price}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textDecoration: 'line-through', ml: 1 }}
          >
            ₹{product.originalPrice}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.description}
        </Typography>
        <AddToCartButton
          fullWidth
          startIcon={<Add />}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </AddToCartButton>
      </CardContent>
    </ProductCard>
  );

  return (
    <Box sx={{ bgcolor: '#FAFAFA', minHeight: '100vh', pb: 8 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ py: 3, display: 'flex', alignItems: 'center' }}>
          <SearchWrapper>
            <Search sx={{ color: 'text.secondary', mr: 1 }} />
            <InputBase
              placeholder="Search for medicines, beauty products & more..."
              fullWidth
              sx={{ ml: 1 }}
            />
          </SearchWrapper>
          <IconButton sx={{ color: 'primary.main' }}>
            <Badge badgeContent={4} color="error">
              <LocalOffer />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: 'primary.main' }}>
            <Badge badgeContent={2} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>

        {/* Categories */}
        <Box sx={{ display: 'flex', gap: 2, mb: 6, overflow: 'auto', pb: 2 }}>
          <CategoryChip
            icon={<LocalHospital />}
            label="Medicine"
            clickable
            color="primary"
          />
          <CategoryChip
            icon={<Spa />}
            label="Wellness"
            clickable
          />
          <CategoryChip
            icon={<Face />}
            label="Beauty"
            clickable
          />
        </Box>

        {/* Brands */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Shop from Top Brands
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, overflow: 'auto', pb: 2, position: 'relative' }}>
            {brands.map((brand, index) => (
              <BrandCard key={index} elevation={0}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 600,
                    color: brand.color
                  }}
                >
                  {brand.name}
                </Typography>
              </BrandCard>
            ))}
            <IconButton
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'white',
                boxShadow: 2,
                '&:hover': { bgcolor: 'primary.main', color: 'white' }
              }}
            >
              <NavigateNext />
            </IconButton>
          </Box>
        </Box>

  

        {/* Medicine Section */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Popular Medicines
            </Typography>
            <Chip 
              label="Upto 30% OFF" 
              color="error" 
              size="small" 
              sx={{ ml: 2 }}
            />
          </Box>
          <Grid container spacing={3}>
            {medicineProducts.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <ProductItem product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Beauty Section */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Beauty & Personal Care
            </Typography>
            <Chip 
              label="Upto 45% OFF" 
              color="error" 
              size="small" 
              sx={{ ml: 2 }}
            />
          </Box>
          <Grid container spacing={3}>
            {beautyProducts.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <ProductItem product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Wellness Section */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Wellness Essentials
            </Typography>
            <Chip 
              label="Upto 35% OFF" 
              color="error" 
              size="small" 
              sx={{ ml: 2 }}
            />
          </Box>
          <Grid container spacing={3}>
            {wellnessProducts.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <ProductItem product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Featured Categories */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Featured Categories
          </Typography>
          <Grid container spacing={3}>
            {[
              { title: 'Diabetes Care', icon: LocalHospital, color: '#4CAF50' },
              { title: 'Health Devices', icon: LocalHospital, color: '#2196F3' },
              { title: 'Ayurveda', icon: Spa, color: '#FF9800' },
              { title: 'Skincare', icon: Face, color: '#9C27B0' }
            ].map((category, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    bgcolor: alpha(category.color, 0.1),
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4,
                      bgcolor: alpha(category.color, 0.2)
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      bgcolor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2
                    }}
                  >
                    <category.icon sx={{ color: category.color }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Explore Products
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Newsletter Subscription */}
        <Box sx={{ mb: 6 }}>
          <Paper
            sx={{
              p: 4,
              borderRadius: 4,
              bgcolor: alpha('#2196F3', 0.1),
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 3
            }}
          >
            <Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Stay Updated!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Subscribe to our newsletter for exclusive offers and health tips.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, width: { xs: '100%', md: 'auto' } }}>
              <InputBase
                placeholder="Enter your email"
                sx={{
                  bgcolor: 'white',
                  borderRadius: 50,
                  px: 2,
                  py: 1,
                  width: { xs: '100%', md: 300 }
                }}
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: 50,
                  textTransform: 'none',
                  px: 3
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default MedicalEcommerce;