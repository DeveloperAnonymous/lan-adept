<?php
require_once('util.php');
require_once('templatesystem.php');

class StaticContent extends Template
{
    private $no_template = False;
    private $static_content_string = "";

    function __construct($static_file_or_string)
    {
        parent::__construct('../templates/' . $static_file_or_string);
        if (!file_exists('../templates/' . $static_file_or_string)) {
            $this->no_template = true;
            $this->add_content($static_file_or_string);
        }
    }

    public function add_content($content)
    {
        if (is_string($content))
            $this->static_content_string .= $content . "\n";
        else if ($content instanceof Template)
            $this->static_content_string .= $content->output();
        $this->set_value('static', $this->static_content_string);
    }

    protected function template_contents()
    {
        if (!$this->no_template)
            return parent::template_contents();
        else
            return "[@static]";
    }
}

abstract class Layout extends Template
{
    private $header;
    private $body;

    function __construct($page_name, $content)
    {
        parent::__construct('../templates/layout.tpl');

        $this->set_value('title', $page_name);
        $this->set_value('navbar', navigationbar());
        $this->set_value('content', $content);
    }

    protected function set_header($value)
    {
        if (!isset($this->header))
            $this->header = new StaticContent($value);
        else
            $this->header->add_content($value);
        $this->set_value('header', $this->header);
    }

    function set_css($css)
    {
        $this->set_header("<link rel=\"stylesheet\" href=\"$css\" />");
    }

    function set_script($script)
    {
        $this->set_header("<script src=\"$script\"></script>");
    }

    function set_meta($properties)
    {
        $tags = "";
        foreach ($properties as $name => $value)
            $tags .= " $name=\"$value\"";
        $this->set_header("<meta$tags/>");
    }

    function body_append($object)
    {
        $this->body[] = $object;
        $this->set_value('body', $this->body);
    }
}

class StandardLayout extends Layout
{
    function __construct($title, $content = "")
    {
        parent::__construct($title, $content);

        $this->set_value("content", $content);
    }

    function set_base_url($base)
    {
        $this->set_header("<BASE href=\"$base\">");
    }
}

class NavigationBar extends StaticContent
{
    public function __construct()
    {
        parent::__construct('navigationbar.tpl');
    }
}

class shopPage extends Layout
{
    public function __construct($title, $content)
    {
        parent::__construct($title, $content);


    }
}

class login extends Layout
{
    public function __construct($page_name, $content)
    {
        parent::__construct($page_name, $content);

    }
}

?>