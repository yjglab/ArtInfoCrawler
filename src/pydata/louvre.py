import infoCrawler

url = 'https://www.louvre.fr/en'
exibition_titles = ".CardsSlideshow_ALaUne_title"
exibition_dates = ".CardsSlideshow_ALaUne_text"

infoCrawler.print_msm_data(url, exibition_titles, exibition_dates)

