import infoCrawler

url = 'https://www.musee-orsay.fr/fr'
titles_selector = ".field--name-title"
dates_selector = ".surtitle" 
thumbnails_selector = "picture img"
details_links_selector = ".card-shadow a"

infoCrawler.print_msm_data(
    url, 
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_links_selector,
    )