import infoCrawler

url = 'https://www.musee-rodin.fr/musee/expositions'
titles_selector = ".expo .titre"
dates_selector = ".expo .date" 
thumbnails_selector = ".expo picture img"
details_links_selector = ".expo .titre a"

infoCrawler.print_msm_data(
    url, 
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_links_selector,
    )