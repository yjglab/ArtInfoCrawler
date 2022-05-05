import infoCrawler

url = 'https://www.cristobalbalenciagamuseoa.com/descubre/exposiciones-actuales/'
exb_nums = 2
titles_selector = ".ficha--exposiciones-actuales .heading"
dates_selector = ".ficha--exposiciones-actuales .fecha"
thumbnails_selector = ".ficha--exposiciones-actuales img"
details_links_selector = ".ficha--exposiciones-actuales p:nth-of-type(3)"
details_content_selector = ""

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )