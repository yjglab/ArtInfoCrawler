import infoCrawler

url = 'https://www.vam.ac.uk/?utm_source=google&utm_medium=cpc&utm_campaign=Grant_Museum_Homepage&gclid=Cj0KCQjwma6TBhDIARIsAOKuANz_MHDyJSDO8LqWnZ0CZ7L20BviIGD8LG-enIcRjLM4SQw1WrMdBtwaAqPlEALw_wcB'
exb_nums = 6
titles_selector = ".events__name"
dates_selector = ".events__dates"
thumbnails_selector = ".events__media img"
details_links_selector = ".events__anchor"
details_content_selector = ".introblock__headline"
infoCrawler.print_msm_data(
    url,
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector,
    details_links_selector,
    details_content_selector,
    )