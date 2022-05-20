from django.urls.converters import StringConverter

class HangulSlugConverter(StringConverter):
    regex = '[-\w]+'
