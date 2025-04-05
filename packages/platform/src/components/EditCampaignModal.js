import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  Stack,
  Box,
  Text,
  Checkbox,
  CheckboxGroup,
  VStack,
  Image,
  Center,
  Icon,
} from '@chakra-ui/react';
import { useState, useRef } from 'react';
import { FiUpload } from 'react-icons/fi';

export const EditCampaignModal = ({ isOpen, onClose, campaign }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: campaign?.name || '',
    adCreative: campaign?.adCreative || '',
    targetedAudience: campaign?.targetedAudience || [],
    balance: campaign?.balance || '',
    status: campaign?.status || 'active',
    clicks: campaign?.clicks || '0',
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Create a preview URL for the image
      const previewUrl = URL.createObjectURL(file);
      setFormData({ ...formData, adCreative: previewUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Submitting updated campaign:', formData);
    console.log('Selected file:', selectedFile);
    onClose();
  };

  const audienceTypes = [
    'Speculator',
    'Pragmatist',
    'Builder',
    'Decentralist'
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Campaign</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Campaign Name</FormLabel>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter campaign name"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>AD Creative Content</FormLabel>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  display="none"
                />
                <Box
                  border="2px dashed"
                  borderColor="gray.200"
                  borderRadius="md"
                  p={4}
                  cursor="pointer"
                  onClick={() => fileInputRef.current.click()}
                  _hover={{ borderColor: 'blue.500' }}
                >
                  {formData.adCreative ? (
                    <Box position="relative">
                      <Image
                        src={formData.adCreative}
                        alt="Ad Preview"
                        maxH="200px"
                        mx="auto"
                      />
                      <Button
                        size="sm"
                        position="absolute"
                        top={2}
                        right={2}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFile(null);
                          setFormData({ ...formData, adCreative: '' });
                        }}
                      >
                        Change Image
                      </Button>
                    </Box>
                  ) : (
                    <Center py={6} flexDirection="column">
                      <Icon as={FiUpload} w={10} h={10} color="gray.400" mb={2} />
                      <Text color="gray.500">
                        Click to upload image or drag and drop
                      </Text>
                      <Text fontSize="sm" color="gray.400" mt={1}>
                        PNG, JPG up to 10MB
                      </Text>
                    </Center>
                  )}
                </Box>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Targeted Audience</FormLabel>
                <CheckboxGroup
                  value={formData.targetedAudience}
                  onChange={(values) => setFormData({ ...formData, targetedAudience: values })}
                >
                  <VStack align="start" spacing={2}>
                    {audienceTypes.map((type) => (
                      <Checkbox key={type} value={type}>
                        {type}
                      </Checkbox>
                    ))}
                  </VStack>
                </CheckboxGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Campaign Balance (USDC)</FormLabel>
                <NumberInput
                  value={formData.balance}
                  onChange={(valueString) => setFormData({ ...formData, balance: valueString })}
                  min={0}
                >
                  <NumberInputField placeholder="Enter campaign budget" />
                </NumberInput>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Status</FormLabel>
                <Select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="active">Active</option>
                  <option value="paused">Paused</option>
                  <option value="waiting">Waiting for approval</option>
                  <option value="completed">Completed</option>
                </Select>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit">
              Save Changes
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}; 